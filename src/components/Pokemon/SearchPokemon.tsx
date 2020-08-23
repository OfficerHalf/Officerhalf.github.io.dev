/** @jsx jsx */
import React from 'react';
import { css, jsx } from '@emotion/core';
import { ActionMeta } from 'react-select';
import AsyncSelect from 'react-select/async';
import { ThemeContext } from '../../store/ThemeContext';
import { getIdFromRel, listAll } from '../../util/pokemon';
import { useSelectTheme } from '../../hooks/useSelectTheme';
import { Rel } from '../../../types/pokemon';

interface SearchPokemonProps {
  onChange?: (value: Rel, meta: ActionMeta<Rel>) => void;
  placeholder?: string;
}

export const SearchPokemon: React.FC<SearchPokemonProps> = props => {
  const { onChange, placeholder } = props;
  const { space } = React.useContext(ThemeContext);
  const selectTheme = useSelectTheme();
  const getLabel = React.useCallback((pokemon: Rel) => `${getIdFromRel(pokemon)} - ${pokemon.name}`, []);
  const getValue = React.useCallback((pokemon: Rel) => getIdFromRel(pokemon).toString(), []);
  const loadOptions = React.useCallback(async (inputValue: string) => {
    const list = await listAll();
    return list.filter(p => p.name.toLowerCase().includes(inputValue.toLowerCase()));
  }, []);

  return (
    <AsyncSelect<Rel>
      controlShouldRenderValue={false}
      loadOptions={loadOptions}
      getOptionLabel={getLabel}
      getOptionValue={getValue}
      onChange={onChange}
      theme={selectTheme}
      placeholder={placeholder}
      css={css`
        margin: ${space.s} 0;
      `}
    />
  );
};
