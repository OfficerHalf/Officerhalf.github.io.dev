/** @jsx jsx */
import React, { Fragment } from 'react';
import { css, jsx } from '@emotion/core';
import { RouteComponentProps } from '@reach/router';
import CreatableSelect from 'react-select/creatable';
import { IdPokemon, Pokemon, RandomizerRunFile } from '../../../types/pokemon';
import { ActionMeta } from 'react-select';
import { getOne } from '../../util/pokemon';
import { selectRandom } from '../../util/random';
import firebase from 'firebase';
import { useGistStorage } from '../../hooks/useGistStorage';
import { Progress } from '../Common/Progress';
import { RunInfo } from './RunInfo';
import { ThemeContext } from '../../store/ThemeContext';

export const Randomizer: React.FC<RouteComponentProps> = props => {
  const { loadRun, saveRun, runs, deleteRun } = useGistStorage();
  const { space } = React.useContext(ThemeContext);
  const [run, setRun] = React.useState<RandomizerRunFile>();
  const [loadingRun, setLoadingRun] = React.useState<boolean>(false);
  const [available, setAvailable] = React.useState<Pokemon[]>([]);
  const [randomTeam, setRandomTeam] = React.useState<Pokemon[]>([]);
  const [saving, setSaving] = React.useState<boolean>(false);

  React.useEffect(() => {
    if (!run) {
      const effect = async () => {
        const lastRun = await loadRun();
        setRun(lastRun);
      };
      effect();
    }
  }, [loadRun, run]);

  const randomize = React.useCallback(() => {
    setRandomTeam(selectRandom(available, Math.min(6, available.length)));
  }, [available]);

  const onSelectRun = React.useCallback(
    async (value: { label: string; value: string }) => {
      setLoadingRun(true);
      const newRun = await loadRun(value.value);
      setRun(newRun);
      setLoadingRun(false);
    },
    [loadRun]
  );

  const update = React.useCallback(
    async (updatedRun: RandomizerRunFile) => {
      const oldName = updatedRun.name;
      setRun(updatedRun);
      setSaving(true);
      if (oldName !== updatedRun.name) {
        await saveRun(updatedRun);
      } else {
        await saveRun(updatedRun);
      }
      setSaving(false);
    },
    [saveRun]
  );

  const doDeleteRun = React.useCallback(async () => {
    setSaving(true);
    await deleteRun(run);
    const newRun = await loadRun();
    setRun(newRun);
    setSaving(false);
  }, [deleteRun, loadRun, run]);

  const selectRunOptions = React.useMemo(() => runs.runs.map(r => ({ label: r.name, value: r.name })), [runs.runs]);

  return (
    <div>
      {(!run || loadingRun) && <Progress />}
      {run && !loadingRun && (
        <Fragment>
          <CreatableSelect
            css={css`
              margin: ${space.s};
              max-width: 575px;
            `}
            placeholder="Select or create a run..."
            options={selectRunOptions}
            onChange={onSelectRun}
          />
          <RunInfo saving={saving} deleteRun={doDeleteRun} run={run} updateRun={update} />
        </Fragment>
      )}
    </div>
  );
};
