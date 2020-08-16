import React from 'react';
import { RouteComponentProps } from '@reach/router';
import { SearchPokemon } from './SearchPokemon';
import { IdPokemon, Pokemon } from '../../../types/pokemon';
import { ActionMeta } from 'react-select';
import { getOne } from '../../util/pokemon';
import { Button } from '../Common/Button';
import { selectRandom } from '../../util/random';

export const Randomizer: React.FC<RouteComponentProps> = props => {
  const [available, setAvailable] = React.useState<Pokemon[]>([]);
  const [randomTeam, setRandomTeam] = React.useState<Pokemon[]>([]);

  const onChange = React.useCallback(async (value: IdPokemon, meta: ActionMeta<IdPokemon>) => {
    const pokemon = await getOne(value.id);
    setAvailable(prev => [...prev, pokemon]);
  }, []);

  const randomize = React.useCallback(() => {
    setRandomTeam(selectRandom(available, Math.min(6, available.length)));
  }, [available]);

  return (
    <div>
      this is the randomizer <SearchPokemon onChange={onChange} />
      <div>{`Pokemon available: ${available.length}`}</div>
      <div>
        <Button onClick={randomize}>Random Team</Button>
        <div>
          {randomTeam.map(p => (
            <div key={p.id}>{p.name}</div>
          ))}
        </div>
      </div>
    </div>
  );
};
