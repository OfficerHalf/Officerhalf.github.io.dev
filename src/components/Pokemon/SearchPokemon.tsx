/** @jsx jsx */
import React from 'react';
import { css, jsx } from '@emotion/core';
import { ActionMeta } from 'react-select';
import AsyncSelect from 'react-select/async';
import { IdPokemon } from '../../../types/pokemon';
import { ThemeContext } from '../../store/ThemeContext';
import { listAll } from '../../util/pokemon';
import { useSelectTheme } from '../../hooks/useSelectTheme';

interface SearchPokemonProps {
  onChange?: (value: IdPokemon, meta: ActionMeta<IdPokemon>) => void;
  placeholder?: string;
}

export const SearchPokemon: React.FC<SearchPokemonProps> = props => {
  const { onChange, placeholder } = props;
  const { space } = React.useContext(ThemeContext);
  const selectTheme = useSelectTheme();
  const getLabel = React.useCallback((pokemon: IdPokemon) => `${pokemon.id} - ${pokemon.name}`, []);
  const getValue = React.useCallback((pokemon: IdPokemon) => pokemon.id.toString(), []);
  const loadOptions = React.useCallback(async (inputValue: string) => {
    const list = await listAll();
    return list.filter(p => p.name.toLowerCase().includes(inputValue.toLowerCase()));
  }, []);

  return (
    <AsyncSelect<IdPokemon>
      controlShouldRenderValue={false}
      loadOptions={loadOptions}
      getOptionLabel={getLabel}
      getOptionValue={getValue}
      onChange={onChange}
      theme={selectTheme}
      placeholder={placeholder}
      css={css`
        margin: ${space.s};
        max-width: 575px;
      `}
    />
  );
};
