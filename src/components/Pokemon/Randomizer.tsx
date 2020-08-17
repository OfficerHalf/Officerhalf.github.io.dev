import React from 'react';
import { RouteComponentProps } from '@reach/router';
import { SearchPokemon } from './SearchPokemon';
import { IdPokemon, Pokemon, RandomizerRunFile, RandomizerSettings } from '../../../types/pokemon';
import { ActionMeta } from 'react-select';
import { getOne } from '../../util/pokemon';
import { Button } from '../Common/Button';
import { selectRandom } from '../../util/random';
import { useGithubToken } from '../../hooks/useGithubToken';
import axios from 'axios';
import { createJsonGist, getGistByFileName, GistFile, updateJsonGist } from '../../util/github';
import slugify from 'slugify';

export const RandomizerSettingsFileName = '.pokemonRandomizerSettings.json';

export const Randomizer: React.FC<RouteComponentProps> = props => {
  const getToken = useGithubToken();
  const [teamName, setTeamName] = React.useState<string>('Default');
  const [available, setAvailable] = React.useState<Pokemon[]>([]);
  const [randomTeam, setRandomTeam] = React.useState<Pokemon[]>([]);

  const onChange = React.useCallback(async (value: IdPokemon, meta: ActionMeta<IdPokemon>) => {
    const pokemon = await getOne(value.id);
    setAvailable(prev => [...prev, pokemon]);
  }, []);

  const randomize = React.useCallback(() => {
    setRandomTeam(selectRandom(available, Math.min(6, available.length)));
  }, [available]);

  const saveTeam = React.useCallback(async () => {
    const token = await getToken();
    const existingGist = await getGistByFileName(token, RandomizerSettingsFileName);
    const teamSlug = slugify(teamName);
    const runFile: RandomizerRunFile = {
      name: teamName,
      pokemon: available,
      team: randomTeam
    };
    const gistFile: GistFile = {
      fileName: `${teamSlug}.json`,
      content: runFile
    };
    const settings: RandomizerSettings = {
      lastSelectedRun: teamSlug
    };
    const settingsFile: GistFile = {
      content: settings,
      fileName: RandomizerSettingsFileName
    };
    if (existingGist) {
      await updateJsonGist(token, existingGist.id, [gistFile, settingsFile]);
    } else {
      await createJsonGist(token, [gistFile, settingsFile]);
    }
  }, [available, getToken, randomTeam, teamName]);

  return (
    <div>
      this is the randomizer <SearchPokemon onChange={onChange} />
      <div>
        <input type="text" value={teamName} onChange={e => setTeamName(e.target.value)} />
      </div>
      <div>{`Pokemon available: ${available.length}`}</div>
      <div>
        <Button onClick={randomize}>Random Team</Button>
        <div>
          {randomTeam.map(p => (
            <div key={p.id}>{p.name}</div>
          ))}
        </div>
      </div>
      <Button onClick={saveTeam}>Save Team</Button>
    </div>
  );
};
