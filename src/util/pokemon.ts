import axios from 'axios';
import {
  PokemonResponse,
  EvolutionChainResponse,
  PokemonListResponse,
  Pokemon,
  PokemonSpecies,
  PokemonEvolution,
  Rel,
  PokemonSpeciesResponse
} from '../../types/pokemon';
import { v4 as GUID } from 'uuid';

const pokemonEndpoint = 'https://pokeapi.co/api/v2/pokemon';

interface TypeColorMap {
  [type: string]: string;
}

export const typeColors: TypeColorMap = {
  normal: '#A8A878',
  fire: '#F08030',
  fighting: '#C03028',
  water: '#6890F0',
  grass: '#78C850',
  poison: '#A040A0',
  electric: '#F8D030',
  ground: '#E0C068',
  rock: '#B8A038',
  bug: '#A8B820',
  dragon: '#7038F8',
  ghost: '#705898',
  dark: '#705848',
  fairy: '#EE99AC',
  steel: '#B8B8D0',
  psychic: '#F85888',
  ice: '#98D8D8',
  flying: '#A890F0'
};

let pokemonResponse: PokemonListResponse = { count: 0, next: null, previous: null, results: [] };
let pokemon: { [key: number]: Pokemon } = {};
let species: { [key: number]: PokemonSpecies } = {};

export function getIdFromRel(rel: Rel): number {
  const parts = rel.url.split('/');
  // find id
  for (let i = parts.length - 1; i >= 0; i--) {
    if (parts[i] !== '/') {
      return parseInt(parts[i]);
    }
  }
}

export function toTitleCase(input: string) {
  return input.replace(/\w\S*/g, function (txt) {
    return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
  });
}

export async function listAll() {
  if (pokemonResponse.count === 0) {
    const countResponse = await axios.get<PokemonListResponse>(pokemonEndpoint, { params: { limit: 1 } });
    const count = countResponse.data.count;
    const resp = await axios.get<PokemonListResponse>(pokemonEndpoint, { params: { limit: count } });

    pokemonResponse = resp.data;
    return pokemonResponse.results;
  } else {
    return Promise.resolve(pokemonResponse.results);
  }
}

export async function getOne(
  id: number,
  ignoreCache: boolean = false
): Promise<{ pokemon: Pokemon; species: PokemonSpecies }> {
  if (!pokemon[id] || ignoreCache) {
    const pokemonResponse = await axios.get<PokemonResponse>(`${pokemonEndpoint}/${id}`);
    const speciesResponse = await axios.get<PokemonSpeciesResponse>(pokemonResponse.data.species.url);

    // Combine these into a useful object without tons of extra properties we don't want
    const apiPokemon = pokemonResponse.data;
    const apiSpecies = speciesResponse.data;

    species[apiSpecies.id] = {
      name: apiSpecies.name,
      evolution_chain: apiSpecies.evolution_chain,
      id: apiSpecies.id,
      varieties: apiSpecies.varieties
    };

    pokemon[id] = {
      id: apiPokemon.id,
      runId: GUID(),
      name: apiPokemon.name,
      sprites: {
        front_default: apiPokemon.sprites.front_default,
        front_shiny: apiPokemon.sprites.front_shiny,
        front_female: apiPokemon.sprites.front_female,
        front_shiny_female: apiPokemon.sprites.front_shiny_female
      },
      types: apiPokemon.types,
      shiny: false,
      species: apiPokemon.species
    };
    return { pokemon: pokemon[id], species: species[apiSpecies.id] };
  } else {
    const cachedPokemon = pokemon[id];
    const cachedSpecies = species[getIdFromRel(cachedPokemon.species)];
    return Promise.resolve({ pokemon: cachedPokemon, species: cachedSpecies });
  }
}

export async function getEvolutions(pokemon: Pokemon): Promise<Pokemon[]> {
  // Get pokemon species
  if (!pokemon.species || !pokemon.species.url) {
    return [];
  }
  const speciesResponse = await axios.get<PokemonSpecies>(pokemon.species.url);

  // Get evolution chain
  if (!speciesResponse.data.evolution_chain || !speciesResponse.data.evolution_chain.url) {
    return [];
  }
  const evolutionChainResponse = await axios.get<EvolutionChainResponse>(speciesResponse.data.evolution_chain.url);
  // Find this pokemon species in the chain
  const thisPokemonsEvolutionChain = searchEvolution(speciesResponse.data.name, evolutionChainResponse.data.chain);
  // Get evolved pokemon species
  if (thisPokemonsEvolutionChain && thisPokemonsEvolutionChain.evolves_to.length > 0) {
    const evolvedSpecies: PokemonSpecies[] = [];
    for (let i = 0; i < thisPokemonsEvolutionChain.evolves_to.length; i++) {
      const evolution = thisPokemonsEvolutionChain.evolves_to[i];
      const species = await axios.get<PokemonSpecies>(evolution.species.url);
      evolvedSpecies.push(species.data);
    }

    // Get evolved pokemon
    const evolvedPokemon: Pokemon[] = [];
    for (let i = 0; i < evolvedSpecies.length; i++) {
      const species = evolvedSpecies[i];
      // Find default variety
      const defaultVariety = species.varieties.find(s => s.is_default);
      const id = parseInt(defaultVariety.pokemon.url.split('/')[6]);
      evolvedPokemon.push((await getOne(id)).pokemon);
    }

    return evolvedPokemon;
  }
  return [];
}

function searchEvolution(targetSpecies: string, evolution: PokemonEvolution): PokemonEvolution | null {
  if (evolution.species.name === targetSpecies) {
    return evolution;
  } else if (evolution.evolves_to.length === 0) {
    return null;
  } else {
    for (let i = 0; i < evolution.evolves_to.length; i++) {
      const result = searchEvolution(targetSpecies, evolution.evolves_to[i]);
      if (result) {
        return result;
      }
    }
  }
  return null;
}
