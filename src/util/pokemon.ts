import axios from 'axios';
import { IdPokemon, PokemonListResponse, Pokemon } from '../../types/pokemon';

const endpoint = 'https://pokeapi.co/api/v2/pokemon';
const highestPokedexNumber = 893;
let pokemonList: IdPokemon[] = [];
const pokemon: { [key: number]: Pokemon } = {};

function toTitleCase(input: string) {
  return input.replace(/\w\S*/g, function (txt) {
    return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
  });
}

export async function listAll() {
  if (pokemonList.length === 0) {
    const countResponse = await axios.get<PokemonListResponse>(endpoint, { params: { limit: 1 } });
    const count = countResponse.data.count;
    const listResponse = await axios.get<PokemonListResponse>(endpoint, { params: { limit: count } });

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
    const pokemonResponse = await axios.get<Pokemon>(`${endpoint}/${id}`);

    // This object has tons of extra properties we don't want
    const big = pokemonResponse.data;
    pokemon[id] = {
      id: big.id,
      is_default: big.is_default,
      name: big.name,
      sprites: {
        front_default: big.sprites.front_default,
        front_shiny: big.sprites.front_shiny
      },
      types: big.types
    };
    return pokemon[id];
  } else {
    return Promise.resolve(pokemon[id]);
  }
}
