import { listAll, getOne, getIdFromRel } from './src/util/pokemon';
import { Pokemon, PokemonSpecies } from './types/pokemon';
import { promises } from 'fs';

const filePath = './data/Pokemon.json';

async function loadData(): Promise<{ pokemon: { [id: string]: Pokemon }; species: { [id: string]: PokemonSpecies } }> {
  const content = await promises.readFile(filePath, { encoding: 'utf8' });
  return JSON.parse(content);
}

async function saveData(pokemon: { [id: string]: Pokemon }, species: { [id: string]: PokemonSpecies }): Promise<void> {
  await promises.writeFile(filePath, JSON.stringify({ pokemon, species }));
}

async function main() {
  let pokemonCollection: { [id: string]: Pokemon } = {};
  let speciesCollection: { [id: string]: PokemonSpecies } = {};

  // List all pokemon
  const allPokemon = await listAll();

  const _start = process.argv[2] || '0';
  const start = parseInt(_start);
  const _end = process.argv[3] || getIdFromRel(allPokemon[allPokemon.length - 1]).toString();
  const end = parseInt(_end);

  // See if we're only getting a subset
  if (start > 0 || end > 0) {
    const resp = await loadData();
    pokemonCollection = resp.pokemon;
    speciesCollection = resp.species;
  }

  // Get all pokemon + species
  for (let i = 0; i < allPokemon.length; i++) {
    const id = getIdFromRel(allPokemon[i]);
    if (id >= start && id <= end) {
      const { pokemon, species } = await getOne(id);
      pokemonCollection[pokemon.id] = pokemon;
      speciesCollection[species.id] = species;
      console.log(`Got ${pokemon.name}.`);
    }
  }

  // Write to file
  await saveData(pokemonCollection, speciesCollection);
}

main();
