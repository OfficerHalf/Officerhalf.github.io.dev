/** @jsx jsx */
import React from 'react';
import { Pokemon } from '../../../types/pokemon';
import { css, jsx } from '@emotion/core';
import { toTitleCase, typeColors } from '../../util/pokemon';
import { Subheading } from '../Typography';
import { ThemeContext } from '../../store/ThemeContext';
import { Checkmark } from '../Icons';
import { Tooltip } from '../Common/Tooltip';

interface EvolutionCardProps {
  pokemon: Pokemon;
  selectPokemon: () => void;
}
export const EvolutionCard: React.FC<EvolutionCardProps> = props => {
  const { pokemon, selectPokemon } = props;
  const { space, textColor } = React.useContext(ThemeContext);

  const iconStyle = css`
    width: ${space.l};
    margin-right: ${space.s};
    fill: ${textColor.accentText};
    cursor: pointer;
    &:hover {
      fill: ${textColor.primaryText};
    }
  `;

  const sprite =
    pokemon.shiny && pokemon.sprites.front_shiny ? pokemon.sprites.front_shiny : pokemon.sprites.front_default;
  const background =
    pokemon.types.length === 2
      ? `linear-gradient(to right, ${typeColors[pokemon.types[0].type.name]} 0%, ${
          typeColors[pokemon.types[0].type.name]
        } 50%, ${typeColors[pokemon.types[1].type.name]} 50%, ${typeColors[pokemon.types[1].type.name]} 100%)`
      : `${typeColors[pokemon.types[0].type.name]}`;

  return (
    <div
      css={css`
        background: ${background};
        position: relative;
        display: flex;
        align-items: center;
        border-radius: ${space.s};
        padding: 0 ${space.s};
        min-width: 300px;
        max-width: 575px;
        margin: ${space.s} 0;
      `}>
      {sprite && (
        <img
          css={css`
            width: 40px;
            max-height: 40px;
          `}
          src={sprite}
          alt={pokemon.name}
        />
      )}
      {!sprite && (
        <div
          css={css`
            width: 40px;
            height: 40px;
          `}
        />
      )}
      <div
        css={css`
          margin-left: ${space.sm};
        `}>
        <Subheading
          css={css`
            margin: 0;
          `}>
          {toTitleCase(pokemon.name)}
        </Subheading>
      </div>
      <div
        css={css`
          flex-grow: 1;
        `}
      />
      <Tooltip text="Evolve">
        <Checkmark css={iconStyle} onClick={selectPokemon} />
      </Tooltip>
    </div>
  );
};
