import { listAll, getOne, getIdFromRel } from './src/util/pokemon';
import { Pokemon, PokemonSpecies } from './types/pokemon';
import { promises } from 'fs';

async function main() {
  // List all pokemon
  const allPokemon = await listAll();

  // Get all pokemon + species
  const pokemonCollection: { [id: number]: Pokemon } = {};
  const speciesCollection: { [id: number]: PokemonSpecies } = {};

  for (let i = 0; i < allPokemon.length; i++) {
    const { pokemon, species } = await getOne(getIdFromRel(allPokemon[i]));
    pokemonCollection[pokemon.id] = pokemon;
    speciesCollection[species.id] = species;
  }

  // Write to file
  await promises.writeFile('./data/Pokemon.json', { pokemon: pokemonCollection, species: speciesCollection });
}

main();
