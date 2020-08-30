/** @jsx jsx */
import { css, jsx } from '@emotion/core';
import React from 'react';
import { useSiteData } from 'react-static';
import { Pokemon, PokemonData } from '../../../types/pokemon';
import { getIdFromRel } from '../../util/pokemon';

function getSpriteFromPokemon(pokemon: Pokemon): string | null {
  return pokemon.shiny && pokemon.sprites.front_shiny ? pokemon.sprites.front_shiny : pokemon.sprites.front_default;
}

function getIconFromPokemon(pokemon: Pokemon): string | null {
  return pokemon.sprites.versions &&
    pokemon.sprites.versions['generation-viii'] &&
    pokemon.sprites.versions['generation-viii'].icons
    ? pokemon.sprites.versions['generation-viii'].icons.front_default
    : null;
}

interface PokemonSpriteProps {
  pokemon: Pokemon;
}

export const PokemonSprite = React.forwardRef<
  HTMLImageElement,
  PokemonSpriteProps & React.DetailedHTMLProps<React.ImgHTMLAttributes<HTMLImageElement>, HTMLImageElement>
>((props, ref) => {
  const { pokemon, ...rest } = props;
  const pokemonData = useSiteData<PokemonData>();

  const species = React.useMemo(() => pokemonData.species[getIdFromRel(pokemon.species)], [
    pokemon.species,
    pokemonData.species
  ]);

  const thisVariety = React.useMemo(() => species.varieties.find(v => getIdFromRel(v.pokemon) === pokemon.id), [
    pokemon.id,
    species.varieties
  ]);

  const sprite = React.useMemo(() => {
    let spriteStyle = css``;
    let sprite = getSpriteFromPokemon(pokemon);

    // Fall back to the default variety
    if ((!sprite || sprite === '') && !thisVariety.is_default) {
      const defaultVariety = species.varieties.find(v => v.is_default === true);
      const defaultPokemon = pokemonData.pokemon[getIdFromRel(defaultVariety.pokemon)];
      sprite = getSpriteFromPokemon(defaultPokemon);
    }

    // Fall back to icon
    if (!sprite || sprite === '') {
      sprite = getIconFromPokemon(pokemon);
      spriteStyle = css`
        transform: translateY(-20%);
      `;
    }

    return <img ref={ref} src={sprite || undefined} alt={`${pokemon.name}-sprite`} css={spriteStyle} {...rest} />;
  }, [pokemon, pokemonData.pokemon, ref, rest, species.varieties, thisVariety.is_default]);

  return sprite;
});
