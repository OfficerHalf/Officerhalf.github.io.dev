import React from 'react';
import { Loot } from '../../../../types/dnd';

export const LootCard: React.FC<Loot> = props => {
  const { name, description, type, tags, minCR, value, source } = props;
  return <div>{name}</div>;
};
