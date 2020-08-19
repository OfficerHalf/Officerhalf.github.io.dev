import axios from 'axios';
import { IdPokemon, PokemonListResponse, Pokemon, PokemonSpecies, ApiPokemon } from '../../types/pokemon';
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
        : PokemonForm.Default
    };
    return pokemon[id];
  } else {
    return Promise.resolve(pokemon[id]);
  }
}
