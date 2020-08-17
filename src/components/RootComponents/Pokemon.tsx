import React from 'react';
import { Randomizer } from '../Pokemon/Randomizer';
import { Private } from '../MetaComponents/Private';
import { RouteComponentProps } from '@reach/router';

export const Pokemon: React.FC<RouteComponentProps> = props => {
  return (
    <Private>
      <Randomizer />
    </Private>
  );
};
