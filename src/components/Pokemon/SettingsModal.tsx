/** @jsx jsx */
import React, { Fragment } from 'react';
import { css, jsx } from '@emotion/core';
import firebase from 'firebase';
import { RandomizerRunFile } from '../../../types/pokemon';
import { Button } from '../Common/Button';
import { Modal } from '../Common/Modal';
import { Body } from '../Typography';
import { getOne } from '../../util/pokemon';
import { Progress } from '../Common/Progress';
import { ThemeContext } from '../../store/ThemeContext';

interface SettingsModalProps {
  open: boolean;
  onClose: () => void;
  run: RandomizerRunFile;
  updateRun: (updated: RandomizerRunFile) => void;
}

export const SettingsModal: React.FC<SettingsModalProps> = props => {
  const { open, run, onClose, updateRun } = props;
  const { space } = React.useContext(ThemeContext);
  const [refreshing, setRefreshing] = React.useState<boolean>(false);
  const [refreshCount, setRefreshCount] = React.useState<number>(0);

  const refresh = React.useCallback(async () => {
    const newPokemon = [...run.pokemon];
    const team = [...run.team];
    setRefreshing(true);
    setRefreshCount(0);
    // Refresh each pokemon
    for (let i = 0; i < newPokemon.length; i++) {
      const pokemon = (await getOne(newPokemon[i].id, true)).pokemon;
      pokemon.nickname = newPokemon[i].nickname;
      pokemon.shiny = newPokemon[i].shiny;
      pokemon.runId = newPokemon[i].runId;
      newPokemon[i] = pokemon;

      // Make sure the team is up to date as well
      const teamIndex = team.findIndex(p => p.runId === pokemon.runId);
      if (teamIndex !== -1) {
        team[teamIndex] = pokemon;
      }
      setRefreshCount(refreshCount + 1);
    }

    // Commit the update
    const updatedRun = { ...run };
    updatedRun.pokemon = newPokemon;
    updatedRun.team = team;
    updateRun(updatedRun);
    setRefreshing(false);
  }, [refreshCount, run, updateRun]);

  const signOut = React.useCallback(() => {
    firebase.auth().signOut();
  }, []);

  const settingsSectionStyle = css`
    display: flex;
    align-items: center;
    justify-content: space-between;
  `;

  const spacerStyle = css`
    width: ${space.m};
  `;

  return (
    <Modal
      css={css`
        max-width: 600px;
      `}
      title="Settings"
      open={open}
      onClose={onClose}>
      {!refreshing && (
        <Fragment>
          <div css={settingsSectionStyle}>
            <Body
              css={css`
                margin: 0;
              `}>
              This will refresh all data from PokeAPI, use this if pokemon data gets messed up or sprites/evolutions are
              missing. Latest gen pokemon may be missing info. Refresh may take some time.
            </Body>
            <div css={spacerStyle} />
            <Button onClick={refresh}>Refresh Pokemon</Button>
          </div>
          <hr />
          <div css={settingsSectionStyle}>
            <Body
              css={css`
                margin: 0;
              `}>
              Sign out.
            </Body>
            <div css={spacerStyle} />
            <Button onClick={signOut}>Sign Out</Button>
          </div>
        </Fragment>
      )}
      {refreshing && (
        <div
          css={css`
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
          `}>
          <Progress />
          <Body>{`Refreshed ${refreshCount}/${run.pokemon.length} pokemon...`}</Body>
        </div>
      )}
    </Modal>
  );
};
