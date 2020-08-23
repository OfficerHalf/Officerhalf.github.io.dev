import React from 'react';
import { useSiteData } from 'react-static';
import { Pokemon, PokemonData } from '../../types/pokemon';
import { getIdFromRel } from '../util/pokemon';

function getSpriteFromPokemon(pokemon: Pokemon): string | null {
  return pokemon.shiny && pokemon.sprites.front_shiny ? pokemon.sprites.front_shiny : pokemon.sprites.front_default;
}

export function usePokemonSprite(pokemon: Pokemon): string {
  const pokemonData = useSiteData<PokemonData>();

  const species = React.useMemo(() => pokemonData.species[getIdFromRel(pokemon.species)], [
    pokemon.species,
    pokemonData.species
  ]);

  const thisVariety = React.useMemo(() => species.varieties.find(v => getIdFromRel(v.pokemon) === pokemon.id), [
    pokemon.id,
    species.varieties
  ]);

  const sprite: string = React.useMemo(() => {
    let sprite = getSpriteFromPokemon(pokemon);

    // Fall back to the default variety
    if (!sprite || (sprite === '' && !thisVariety.is_default)) {
      const defaultVariety = species.varieties.find(v => v.is_default === true);
      const defaultPokemon = pokemonData.pokemon[getIdFromRel(defaultVariety.pokemon)];
      sprite = getSpriteFromPokemon(defaultPokemon);
    }

    return sprite;
  }, [pokemon, pokemonData.pokemon, species.varieties, thisVariety.is_default]);

  return sprite;
}
