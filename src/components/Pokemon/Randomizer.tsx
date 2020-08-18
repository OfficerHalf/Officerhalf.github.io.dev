import React from 'react';
import { RouteComponentProps } from '@reach/router';
import { SearchPokemon } from './SearchPokemon';
import { IdPokemon, Pokemon, RandomizerRunFile } from '../../../types/pokemon';
import { ActionMeta } from 'react-select';
import { getOne } from '../../util/pokemon';
import { Button } from '../Common/Button';
import { selectRandom } from '../../util/random';
import firebase from 'firebase';
import { useGistStorage } from '../../hooks/useGistStorage';
import { Progress } from '../Common/Progress';
import { RunInfo } from './RunInfo';

export const Randomizer: React.FC<RouteComponentProps> = props => {
  const { loadRun, saveRun } = useGistStorage();
  const [run, setRun] = React.useState<RandomizerRunFile>();
  const [teamName, setTeamName] = React.useState<string>('Default');
  const [available, setAvailable] = React.useState<Pokemon[]>([]);
  const [randomTeam, setRandomTeam] = React.useState<Pokemon[]>([]);

  React.useEffect(() => {
    if (!run) {
      const effect = async () => {
        const lastRun = await loadRun();
        setRun(lastRun);
      };
      effect();
    }
  }, [loadRun, run]);

  const logOut = React.useCallback(() => {
    firebase.auth().signOut();
  }, []);

  const onChange = React.useCallback(async (value: IdPokemon, meta: ActionMeta<IdPokemon>) => {
    const pokemon = await getOne(value.id);
    setAvailable(prev => [...prev, pokemon]);
  }, []);

  const randomize = React.useCallback(() => {
    setRandomTeam(selectRandom(available, Math.min(6, available.length)));
  }, [available]);

  return (
    <div>
      {!run && <Progress />}
      {run && <RunInfo run={run} />}
    </div>
  );
};
