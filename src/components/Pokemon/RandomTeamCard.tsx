/** @jsx jsx */
import React from 'react';
import { Pokemon } from '../../../types/pokemon';
import { css, jsx } from '@emotion/core';
import cx from 'classnames';
import { toTitleCase, typeColors } from '../../util/pokemon';
import { Subheading } from '../Typography';
import { ThemeContext } from '../../store/ThemeContext';
import { Block, Heart } from '../Icons';
import { Tooltip } from '../Common/Tooltip';
import { PokemonSprite } from './PokemonSprite';

interface RandomTeamCardProps {
  pokemon: Pokemon;
  fainted: boolean;
  toggleFainted: (newFainted: boolean, id: string) => void;
}
export const RandomTeamCard: React.FC<RandomTeamCardProps> = props => {
  const { pokemon, fainted, toggleFainted } = props;
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

  const background = React.useMemo(() => {
    let background: string = typeColors['normal'];
    if (pokemon.types && pokemon.types.length === 2) {
      background = `linear-gradient(to right, ${typeColors[pokemon.types[0].type.name]} 0%, ${
        typeColors[pokemon.types[0].type.name]
      } 50%, ${typeColors[pokemon.types[1].type.name]} 50%, ${typeColors[pokemon.types[1].type.name]} 100%)`;
    } else if (pokemon.types && pokemon.types.length === 1) {
      background = typeColors[pokemon.types[0].type.name];
    }
    return background;
  }, [pokemon.types]);

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
        transition: opacity 300ms;
        &.fainted {
          opacity: 0.3;
        }
      `}
      className={cx({ fainted })}>
      <PokemonSprite
        pokemon={pokemon}
        css={css`
          width: 40px;
          height: 40px;
        `}
      />
      <div
        css={css`
          margin-left: ${space.sm};
        `}>
        <Subheading
          css={css`
            margin: 0;
          `}>
          {pokemon.nickname ? pokemon.nickname : toTitleCase(pokemon.name)}
        </Subheading>
      </div>
      <div
        css={css`
          flex-grow: 1;
        `}
      />
      {!fainted && (
        <Tooltip text="Fainted">
          <Block css={iconStyle} onClick={() => toggleFainted(!fainted, pokemon.runId)} />
        </Tooltip>
      )}
      {fainted && (
        <Tooltip text="Revived">
          <Heart css={iconStyle} onClick={() => toggleFainted(!fainted, pokemon.runId)} />
        </Tooltip>
      )}
    </div>
  );
};
