/** @jsx jsx */
import React from 'react';
import { css, jsx } from '@emotion/core';
import { Pokemon } from '../../../types/pokemon';
import { Modal } from '../Common/Modal';
import { getEvolutions } from '../../util/pokemon';
import { Progress } from '../Common/Progress';
import { EvolutionCard } from './EvolutionCard';
import { Body } from '../Typography';

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
  const initialized = React.useRef<boolean>(false);

  React.useEffect(() => {
    const effect = async () => {
      initialized.current = true;
      setLoading(true);
      const evolutions = await getEvolutions(pokemon);
      setEvolutions(evolutions);
      setLoading(false);
    };
    if (open && !initialized.current) {
      effect();
    }
  }, [open, pokemon]);

  const selectPokemon = React.useCallback(
    (evolution: Pokemon) => () => {
      const newPokemon = { ...evolution };
      newPokemon.nickname = pokemon.nickname;
      newPokemon.runId = pokemon.runId;
      newPokemon.shiny = pokemon.shiny;
      newPokemon.benched = pokemon.benched;
      updatePokemon(newPokemon);
      onClose();
    },
    [onClose, pokemon.benched, pokemon.nickname, pokemon.runId, pokemon.shiny, updatePokemon]
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
          {evolutions.length === 0 && <Body>Sorry, couldn't find any evolutions for this pokemon.</Body>}
          {evolutions.map(e => (
            <EvolutionCard pokemon={e} selectPokemon={selectPokemon(e)} />
          ))}
        </div>
      )}
    </Modal>
  );
};
