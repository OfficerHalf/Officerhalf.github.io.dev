/** @jsx jsx */
import React from 'react';
import { css, jsx } from '@emotion/core';
import { ActionMeta } from 'react-select';
import Select from 'react-select';
import { ThemeContext } from '../../store/ThemeContext';
import { toTitleCase } from '../../util/pokemon';
import { useSelectTheme } from '../../hooks/useSelectTheme';
import { PokemonData, PokemonSpecies } from '../../../types/pokemon';
import { useSiteData } from 'react-static';

interface SearchPokemonProps {
  onChange?: (value: PokemonSpecies, meta: ActionMeta<PokemonSpecies>) => void;
  placeholder?: string;
}

export const SearchPokemon: React.FC<SearchPokemonProps> = props => {
  const { onChange, placeholder } = props;
  const { space } = React.useContext(ThemeContext);
  const pokemonData = useSiteData<PokemonData>();
  const species = React.useMemo(() => {
    const species: PokemonSpecies[] = [];
    const speciesIds = Object.keys(pokemonData.species);
    speciesIds.forEach(id => {
      species.push(pokemonData.species[id]);
    });
    return species;
  }, [pokemonData.species]);
  const selectTheme = useSelectTheme();
  const getLabel = React.useCallback((pokemon: PokemonSpecies) => `${pokemon.id} - ${toTitleCase(pokemon.name)}`, []);
  const getValue = React.useCallback((pokemon: PokemonSpecies) => pokemon.id.toString(), []);

  return (
    <Select<PokemonSpecies>
      controlShouldRenderValue={false}
      getOptionLabel={getLabel}
      getOptionValue={getValue}
      onChange={onChange}
      theme={selectTheme}
      placeholder={placeholder}
      css={css`
        margin: ${space.s} 0;
      `}
      options={species}
    />
  );
};
