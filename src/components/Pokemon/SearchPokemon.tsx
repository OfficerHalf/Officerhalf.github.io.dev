import React from 'react';
import { ActionMeta, Theme } from 'react-select';
import AsyncSelect from 'react-select/async';
import { ThemeConfig } from 'react-select/src/theme';
import { IdPokemon } from '../../../types/pokemon';
import { ThemeContext } from '../../store/ThemeContext';
import { listAll } from '../../util/pokemon';

interface SearchPokemonProps {
  onChange?: (value: IdPokemon, meta: ActionMeta<IdPokemon>) => void;
}

export const SearchPokemon: React.FC<SearchPokemonProps> = props => {
  const { onChange } = props;
  const { primary, textColor, dark, background } = React.useContext(ThemeContext);
  const getLabel = React.useCallback((pokemon: IdPokemon) => `${pokemon.id} - ${pokemon.name}`, []);
  const getValue = React.useCallback((pokemon: IdPokemon) => pokemon.id.toString(), []);
  const loadOptions = React.useCallback(async (inputValue: string) => {
    const list = await listAll();
    return list.filter(p => p.name.toLowerCase().includes(inputValue.toLowerCase()));
  }, []);

  const buildTheme: ThemeConfig = React.useCallback(
    (selectTheme: Theme) => {
      const newTheme = { ...selectTheme };
      newTheme.colors['primary'] = primary.darker;
      newTheme.colors['primary75'] = primary.main;
      newTheme.colors['primary50'] = primary.main;
      newTheme.colors['primary25'] = primary.lighter;
      if (dark) {
        newTheme.colors['neutral0'] = background.background20; // background of the field
        newTheme.colors['neutral5'] = background.background20;
        newTheme.colors['neutral10'] = background.background20;
        newTheme.colors['neutral20'] = background.background40; // dropdown arrow / separator / border
        newTheme.colors['neutral30'] = background.background60; // hover border
        newTheme.colors['neutral40'] = textColor.accentText; // no options text
        newTheme.colors['neutral50'] = textColor.disabledText; // field placeholder text
        newTheme.colors['neutral60'] = background.background70; // used on the border
        newTheme.colors['neutral70'] = background.background70;
        newTheme.colors['neutral80'] = textColor.primaryText; // Text color in the field
        newTheme.colors['neutral90'] = background.background80;
      }
      return newTheme;
    },
    [
      background.background20,
      background.background40,
      background.background60,
      background.background70,
      background.background80,
      dark,
      primary.darker,
      primary.lighter,
      primary.main,
      textColor.accentText,
      textColor.disabledText,
      textColor.primaryText
    ]
  );

  return (
    <AsyncSelect<IdPokemon>
      loadOptions={loadOptions}
      getOptionLabel={getLabel}
      getOptionValue={getValue}
      onChange={onChange}
      theme={buildTheme}
    />
  );
};
