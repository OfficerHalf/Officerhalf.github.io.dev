/** @jsx jsx */
import React from 'react';
import { css, jsx } from '@emotion/core';
import { Pokemon } from '../../../types/pokemon';
import { Modal } from '../Common/Modal';
import { getEvolutions } from '../../util/pokemon';
import { Progress } from '../Common/Progress';
import { EvolutionCard } from './EvolutionCard';

interface EvolutionModalProps {
  pokemon: Pokemon;
  updatePokemon: (updated: Pokemon) => void;
  onClose: () => void;
  open: boolean;
}

export const EvolutionModal: React.FC<EvolutionModalProps> = props => {
  const { pokemon, updatePokemon, open, onClose } = props;
  const [evolutions, setEvolutions] = React.useState<Pokemon[]>([]);
  const [loading, setLoading] = React.useState<boolean>(true);

  React.useEffect(() => {
    const effect = async () => {
      setLoading(true);
      const evolutions = await getEvolutions(pokemon);
      setEvolutions(evolutions);
      setLoading(false);
    };
    effect();
  }, [pokemon]);

  const selectPokemon = React.useCallback(
    (evolution: Pokemon) => () => {
      const newPokemon = { ...evolution };
      newPokemon.nickname = pokemon.nickname;
      newPokemon.runId = pokemon.runId;
      newPokemon.shiny = pokemon.shiny;
      updatePokemon(newPokemon);
      onClose();
    },
    [onClose, pokemon.nickname, pokemon.runId, pokemon.shiny, updatePokemon]
  );

  return (
    <Modal open={open} onClose={onClose} title="Evolve pokemon">
      {loading && (
        <div
          css={css`
            display: flex;
            justify-content: center;
            align-items: center;
          `}>
          <Progress />
        </div>
      )}
      {!loading && (
        <div>
          {evolutions.map(e => (
            <EvolutionCard pokemon={e} selectPokemon={selectPokemon(e)} />
          ))}
        </div>
      )}
    </Modal>
  );
};
