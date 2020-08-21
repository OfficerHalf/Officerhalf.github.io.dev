import React from 'react';
import { Pokemon, RandomizerRunFile } from '../../../types/pokemon';
import { Button } from '../Common/Button';
import { Modal } from '../Common/Modal';

interface RandomTeamModalProps {
  open: boolean;
  allPokemon: Pokemon[];
  team: Pokemon[];
  updateRun: (updated: RandomizerRunFile) => void;
}

export const RandomTeamModal: React.FC<RandomTeamModalProps> = props => {
  const { open, allPokemon, team, updateRun } = props;
  return (
    <Modal open={open}>
      <Button>New Random Team</Button>
    </Modal>
  );
};
