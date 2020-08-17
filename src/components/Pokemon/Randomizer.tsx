import React from 'react';
import { RouteComponentProps } from '@reach/router';
import { SearchPokemon } from './SearchPokemon';
import { IdPokemon, Pokemon } from '../../../types/pokemon';
import { ActionMeta } from 'react-select';
import { getOne } from '../../util/pokemon';
import { Button } from '../Common/Button';
import { selectRandom } from '../../util/random';
import firebase from 'firebase';
// import axios from 'axios';

export const Randomizer: React.FC<RouteComponentProps> = props => {
  // const { user, getAccessTokenSilently, getAccessTokenWithPopup, logout, getIdTokenClaims } = useAuth0();
  const [available, setAvailable] = React.useState<Pokemon[]>([]);
  const [randomTeam, setRandomTeam] = React.useState<Pokemon[]>([]);

  const onChange = React.useCallback(async (value: IdPokemon, meta: ActionMeta<IdPokemon>) => {
    const pokemon = await getOne(value.id);
    setAvailable(prev => [...prev, pokemon]);
  }, []);

  const randomize = React.useCallback(() => {
    setRandomTeam(selectRandom(available, Math.min(6, available.length)));
  }, [available]);

  const getToken = React.useCallback(() => {
    firebase.auth().signOut();
  }, []);

  // const consent = React.useCallback(async () => {
  //   await getAccessTokenWithPopup({ scope: 'gist' });
  // }, [getAccessTokenWithPopup]);

  // const getToken = React.useCallback(async () => {
  //   const claims = await getIdTokenClaims();
  //   console.log(claims);
  //   const token = await getAccessTokenSilently({ scope: 'user gist' });
  //   console.log(token);
  //   const resp = await axios.get('https://api.github.com/graphql', {
  //     headers: { Authorization: `Bearer ${token}` }
  //   });
  //   console.log(resp);
  // }, [getAccessTokenSilently, getIdTokenClaims]);

  // const handleLogout = React.useCallback(() => {
  //   logout();
  // }, [logout]);

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
      {/* <Button onClick={consent}>Consent</Button> */}
      <Button onClick={getToken}>Get Token</Button>
      {/* <Button onClick={handleLogout}>Logout</Button> */}
    </div>
  );
};
