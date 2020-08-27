/** @jsx jsx */
import React, { Fragment } from 'react';
import { css, jsx } from '@emotion/core';
import { Pokemon, PokemonData, PokemonSpeciesVariety } from '../../../types/pokemon';
import { Button } from '../Common/Button';
import { Modal } from '../Common/Modal';
import { Body } from '../Typography';
import { getIdFromRel, toTitleCase } from '../../util/pokemon';
import { ThemeContext } from '../../store/ThemeContext';
import { useSiteData } from 'react-static';
import Select from 'react-select';
import { useSelectTheme } from '../../hooks/useSelectTheme';
import { ToggleSwitch } from '../Common/ToggleSwitch';

interface PokemonSettingsModalProps {
  pokemon: Pokemon;
  updatePokemon: (updated: Pokemon) => void;
  open: boolean;
  onClose: () => void;
  removePokemon: () => void;
}

export const PokemonSettingsModal: React.FC<PokemonSettingsModalProps> = props => {
  const { open, pokemon, onClose, updatePokemon, removePokemon } = props;
  const pokemonData = useSiteData<PokemonData>();
  const species = React.useMemo(() => pokemonData.species[getIdFromRel(pokemon.species)], [
    pokemon.species,
    pokemonData.species
  ]);
  const currentVariety = React.useMemo(() => {
    return species.varieties.find(s => getIdFromRel(s.pokemon) === pokemon.id);
  }, [pokemon.id, species.varieties]);
  const { space } = React.useContext(ThemeContext);
  const selectTheme = useSelectTheme();

  const settingsSectionStyle = css`
    display: flex;
    align-items: center;
    justify-content: space-between;
    p {
      margin: 0;
    }
  `;

  const spacerStyle = css`
    width: ${space.m};
  `;

  const getVarietyName = React.useCallback((variety: PokemonSpeciesVariety): string => {
    if (variety.is_default && !variety.pokemon.name.includes('-')) {
      return 'Default';
    } else {
      const pokemonName = variety.pokemon.name;
      const nameParts = pokemonName.split('-');
      nameParts.splice(0, 1);
      if (nameParts.length === 0) {
        return pokemonName;
      } else {
        return toTitleCase(nameParts.join(' '));
      }
    }
  }, []);

  const varietyChange = React.useCallback(
    (variety: PokemonSpeciesVariety) => {
      // get the right pokemon
      const newPokemon = pokemonData.pokemon[getIdFromRel(variety.pokemon)];
      newPokemon.nickname = pokemon.nickname;
      newPokemon.shiny = pokemon.shiny;
      newPokemon.benched = pokemon.benched;
      newPokemon.runId = pokemon.runId;
      updatePokemon(newPokemon);
    },
    [pokemon.benched, pokemon.nickname, pokemon.runId, pokemon.shiny, pokemonData.pokemon, updatePokemon]
  );

  const benchedChange = React.useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      const newPokemon = { ...pokemon };
      if (event.target.checked) {
        newPokemon.benched = true;
      } else {
        newPokemon.benched = false;
      }
      updatePokemon(newPokemon);
    },
    [pokemon, updatePokemon]
  );

  const shinyChange = React.useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      const newPokemon = { ...pokemon };
      if (event.target.checked) {
        newPokemon.shiny = true;
      } else {
        newPokemon.shiny = false;
      }
      updatePokemon(newPokemon);
    },
    [pokemon, updatePokemon]
  );

  return (
    <Modal
      css={css`
        max-width: 600px;
      `}
      title="Pokemon Settings"
      open={open}
      onClose={onClose}>
      {species.varieties.length > 1 && (
        <Fragment>
          <div>
            <Body
              css={css`
                margin: 0;
              `}>
              Select variety
            </Body>
            <Select<PokemonSpeciesVariety>
              placeholder="Select variety"
              theme={selectTheme}
              options={species.varieties}
              getOptionLabel={getVarietyName}
              onChange={varietyChange}
              value={currentVariety}
            />
          </div>
          <hr />
        </Fragment>
      )}
      <div css={settingsSectionStyle}>
        <Body>Shiny</Body>
        <div css={spacerStyle} />
        <ToggleSwitch checked={pokemon.shiny} onChange={shinyChange} />
      </div>
      <hr />
      <div css={settingsSectionStyle}>
        <Body>Bench Pokemon. Removes this pokemon from the random pool, but not your team.</Body>
        <div css={spacerStyle} />
        <ToggleSwitch checked={pokemon.benched} onChange={benchedChange} />
      </div>
      <hr />
      <div css={settingsSectionStyle}>
        <Body>Release pokemon.</Body>
        <div css={spacerStyle} />
        <Button onClick={removePokemon}>Release Pokemon</Button>
      </div>
    </Modal>
  );
};
