import axios, { AxiosResponse } from 'axios';
import {
  IdPokemon,
  PokemonListResponse,
  Pokemon,
  PokemonSpecies,
  ApiPokemon,
  PokemonEvolutionChain,
  PokemonEvolution
} from '../../types/pokemon';
import { v4 as GUID } from 'uuid';
import color from 'color';

export enum PokemonForm {
  Default = 'default',
  Alolan = 'alola',
  Galarian = 'galar'
}

const pokemonEndpoint = 'https://pokeapi.co/api/v2/pokemon';
const speciesEndpoint = 'https://pokeapi.co/api/v2/pokemon-species';
const highestPokedexNumber = 893;

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

let pokemonList: IdPokemon[] = [];
const pokemon: { [key: number]: Pokemon } = {};

export function toTitleCase(input: string) {
  return input.replace(/\w\S*/g, function (txt) {
    return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
  });
}

export async function listAll() {
  if (pokemonList.length === 0) {
    const countResponse = await axios.get<PokemonListResponse>(pokemonEndpoint, { params: { limit: 1 } });
    const count = countResponse.data.count;
    const listResponse = await axios.get<PokemonListResponse>(pokemonEndpoint, { params: { limit: count } });

    // Filter out forms and specials
    pokemonList = listResponse.data.results
      .map(p => {
        const id = parseInt(p.url.split('/')[6]);
        return { name: toTitleCase(p.name), id };
      })
      .filter(p => p.id >= 1 && p.id <= highestPokedexNumber);
    return pokemonList;
  } else {
    return Promise.resolve(pokemonList);
  }
}

export async function getOne(id: number) {
  if (!pokemon[id]) {
    const pokemonResponse = await axios.get<ApiPokemon>(`${pokemonEndpoint}/${id}`);
    // const speciesResponse = await axios.get<PokemonSpecies>(pokemonResponse.data.species.url);

    // Combine these into a useful object without tons of extra properties we don't want
    const apiPokemon = pokemonResponse.data;
    // const apiSpecies = speciesResponse.data;

    pokemon[id] = {
      id: apiPokemon.id,
      runId: GUID(),
      name: apiPokemon.name,
      sprites: {
        front_default: apiPokemon.sprites.front_default,
        front_shiny: apiPokemon.sprites.front_shiny
      },
      types: apiPokemon.types,
      shiny: false,
      variety: apiPokemon.name.endsWith(`-${PokemonForm.Alolan}`)
        ? PokemonForm.Alolan
        : apiPokemon.name.endsWith(`-${PokemonForm.Galarian}`)
        ? PokemonForm.Galarian
        : PokemonForm.Default,
      species: apiPokemon.species
    };
    return pokemon[id];
  } else {
    return Promise.resolve(pokemon[id]);
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
  const evolutionChainResponse = await axios.get<PokemonEvolutionChain>(speciesResponse.data.evolution_chain.url);
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
      evolvedPokemon.push(await getOne(id));
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
