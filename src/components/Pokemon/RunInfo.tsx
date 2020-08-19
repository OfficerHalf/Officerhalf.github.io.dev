import React from 'react';
import { Pokemon, RandomizerRunFile } from '../../../types/pokemon';
import { Title, Subheading } from '../Typography';
import { PokemonCard } from './PokemonCard';

interface RunInfoProps {
  run: RandomizerRunFile;
  updateRun: (updatedRun: RandomizerRunFile) => void;
}

export const RunInfo: React.FC<RunInfoProps> = props => {
  const { run, updateRun } = props;

  const updatePokemon = React.useCallback(
    (runId: string) => (updated: Pokemon) => {
      const newPokemon = [...run.pokemon];
      const replaceIndex = newPokemon.findIndex(p => p.runId === runId);
      if (replaceIndex !== -1) {
        newPokemon[replaceIndex] = updated;
      } else {
        newPokemon.push(updated);
      }
      const newRun = { ...run };
      newRun.pokemon = newPokemon;
      updateRun(newRun);
    },
    [run, updateRun]
  );

  return (
    <div>
      <Title>{run.name}</Title>
      <Subheading>{`${run.pokemon.length} Pokemon available`}</Subheading>
      {run.pokemon.map(p => (
        <PokemonCard pokemon={p} updatePokemon={updatePokemon(p.runId)} />
      ))}
    </div>
  );
};
