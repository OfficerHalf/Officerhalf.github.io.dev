import React from 'react';
import { RandomizerRunFile } from '../../../types/pokemon';
import { Title, Subheading } from '../Typography';

interface RunInfoProps {
  run: RandomizerRunFile;
}

export const RunInfo: React.FC<RunInfoProps> = props => {
  const { run } = props;
  return (
    <div>
      <Title>{run.name}</Title>
      <Subheading>{`${run.pokemon.length} Pokemon available`}</Subheading>
      {run.pokemon.map(p => (
        <div>{p.name}</div>
      ))}
    </div>
  );
};
