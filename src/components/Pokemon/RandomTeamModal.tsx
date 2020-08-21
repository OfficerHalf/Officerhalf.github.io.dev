/** @jsx jsx */
import React from 'react';
import { css, jsx } from '@emotion/core';
import { RandomizerRunFile } from '../../../types/pokemon';
import { selectRandom } from '../../util/random';
import { Button } from '../Common/Button';
import { Modal } from '../Common/Modal';
import { Body } from '../Typography';
import { RandomTeamCard } from './RandomTeamCard';
import { ThemeContext } from '../../store/ThemeContext';

interface RandomTeamModalProps {
  open: boolean;
  onClose: () => void;
  run: RandomizerRunFile;
  updateRun: (updated: RandomizerRunFile) => void;
}

export const RandomTeamModal: React.FC<RandomTeamModalProps> = props => {
  const { open, run, updateRun, onClose } = props;
  const { pokemon, team } = run;
  const { space } = React.useContext(ThemeContext);
  const [faintedPokemon, setFaintedPokemon] = React.useState<string[]>([]);

  const getNewRandomTeam = React.useCallback(() => {
    // Filter out fainted pokemon
    const available = pokemon.filter(p => !faintedPokemon.includes(p.runId));

    // If we don't have a full team, add back some fainted ones
    if (available.length < 6 && faintedPokemon.length > 0) {
      const emptyCount = 6 - available.length;
      const faintedIds = selectRandom(faintedPokemon, Math.min(emptyCount, faintedPokemon.length));
      faintedIds.forEach(id => {
        const fainted = pokemon.find(p => p.runId === id);
        available.push(fainted);
      });
    }

    // Generate the new team and update the run
    const newTeam = selectRandom(available, 6);
    const newRun = { ...run };
    newRun.team = newTeam;
    updateRun(newRun);
  }, [faintedPokemon, pokemon, run, updateRun]);

  const toggleFainted = React.useCallback(
    (newFainted: boolean, id: string) => {
      const newFaintedPokemon = [...faintedPokemon];
      const idIndex = newFaintedPokemon.indexOf(id);
      if (!newFainted) {
        if (idIndex !== -1) {
          newFaintedPokemon.splice(idIndex, 1);
        }
      } else {
        if (idIndex === -1) {
          newFaintedPokemon.push(id);
        }
      }
      setFaintedPokemon(newFaintedPokemon);
    },
    [faintedPokemon]
  );

  return (
    <Modal title="Random Team" open={open} onClose={onClose}>
      {pokemon.length === 0 && <Body>You'll need to add some pokemon first.</Body>}
      {team.length === 0 && <Body>Generate a new random team!</Body>}
      {team.map(p => {
        const hasFainted = faintedPokemon.includes(p.runId);
        return <RandomTeamCard key={p.runId} fainted={hasFainted} pokemon={p} toggleFainted={toggleFainted} />;
      })}
      <div
        css={css`
          display: flex;
          justify-content: flex-end;
          margin-top: ${space.m};
        `}>
        <Button onClick={getNewRandomTeam}>New Random Team</Button>
      </div>
    </Modal>
  );
};
