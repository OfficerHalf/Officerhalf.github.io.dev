/** @jsx jsx */
import React, { Fragment } from 'react';
import { css, jsx } from '@emotion/core';
import { IdPokemon, Pokemon, RandomizerRunFile } from '../../../types/pokemon';
import { Checkmark, Close, EditPencil, Trash } from '../Icons';
import { Subheading, Headline } from '../Typography';
import { PokemonCard } from './PokemonCard';
import { ThemeContext } from '../../store/ThemeContext';
import { TransparentInput } from '../Common/TransparentInput';
import { SearchPokemon } from './SearchPokemon';
import { getOne } from '../../util/pokemon';
import { Button } from '../Common/Button';
import { Modal } from '../Common/Modal';
import { Tooltip } from '../Common/Tooltip';
import { SavingStatus } from './SavingStatus';

interface RunInfoProps {
  run: RandomizerRunFile;
  updateRun: (updatedRun: RandomizerRunFile) => void;
  deleteRun: () => Promise<void>;
  saving: boolean;
}

export const RunInfo: React.FC<RunInfoProps> = props => {
  const { run, updateRun, deleteRun, saving } = props;
  const { space, textColor, typography } = React.useContext(ThemeContext);
  const [editingName, setEditingName] = React.useState<boolean>(false);
  const [runName, setRunName] = React.useState<string>(run.name);
  const [showConfirm, setShowConfirm] = React.useState<boolean>(false);
  const runNameInputRef = React.useRef<HTMLInputElement>(null);

  const iconStyle = css`
    width: ${space.l};
    margin-left: ${space.s};
    fill: ${textColor.accentText};
    cursor: pointer;
    &:hover {
      fill: ${textColor.primaryText};
    }
  `;

  const editName = React.useCallback(() => {
    setEditingName(true);
    setRunName(run.name);
  }, [run.name]);

  const nameChange = React.useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
    setRunName(event.target.value);
  }, []);

  const saveName = React.useCallback(() => {
    if (runName && runName !== '') {
      const newRun = { ...run };
      newRun.name = runName;
      updateRun(newRun);
    }
    setEditingName(false);
  }, [run, runName, updateRun]);

  React.useEffect(() => {
    if (editingName && runNameInputRef.current) {
      runNameInputRef.current.focus();
    }
  }, [editingName]);

  const updatePokemon = React.useCallback(
    (runId: string) => (updated: Pokemon) => {
      const newPokemon = [...run.pokemon];
      const replaceIndex = newPokemon.findIndex(p => p.runId === runId);
      if (replaceIndex !== -1) {
        newPokemon[replaceIndex] = updated;
      } else {
        newPokemon.push(updated);
      }
      const newRun = { ...run };
      newRun.pokemon = newPokemon;
      updateRun(newRun);
    },
    [run, updateRun]
  );

  const addPokemon = React.useCallback(
    async (value: IdPokemon) => {
      const pokemon = await getOne(value.id);
      updatePokemon(pokemon.runId)(pokemon);
    },
    [updatePokemon]
  );

  const removePokemon = React.useCallback(
    (runId: string) => () => {
      const newPokemon = [...run.pokemon];
      const removeIndex = newPokemon.findIndex(p => p.runId === runId);
      if (removeIndex !== -1) {
        newPokemon.splice(removeIndex, 1);
        const newRun = { ...run };
        newRun.pokemon = newPokemon;
        updateRun(newRun);
      }
    },
    [run, updateRun]
  );

  const doDeleteRun = React.useCallback(async () => {
    await deleteRun();
    setShowConfirm(false);
  }, [deleteRun]);

  return (
    <div>
      <div
        css={css`
          display: flex;
          height: 52px;
          margin-left: ${space.s};
          max-width: 575px;
        `}>
        {!editingName && (
          <Fragment>
            <Headline
              css={css`
                margin-right: ${space.s};
              `}>
              {run.name}
            </Headline>
            <Tooltip text="Rename">
              <EditPencil css={iconStyle} onClick={editName} />
            </Tooltip>
            <Tooltip text="Delete">
              <Trash css={iconStyle} onClick={() => setShowConfirm(true)} />
            </Tooltip>
            <div
              css={css`
                flex-grow: 1;
              `}
            />
            <SavingStatus saving={saving} />
          </Fragment>
        )}
        {editingName && (
          <Fragment>
            <TransparentInput
              css={css`
                margin-right: ${space.s};
                font-size: ${typography.headline.size};
              `}
              ref={runNameInputRef}
              onChange={nameChange}
              value={runName}
            />
            <Tooltip text="Save">
              <Checkmark css={iconStyle} onClick={saveName} />
            </Tooltip>
            <Tooltip text="Cancel">
              <Close css={iconStyle} onClick={() => setEditingName(false)} />
            </Tooltip>
          </Fragment>
        )}
      </div>
      <div
        css={css`
          margin-left: ${space.s};
          display: flex;
          max-width: 575px;
          align-items: center;
        `}>
        <Subheading
          css={css`
            margin: 0;
          `}>{`${run.pokemon.length} Pokemon caught`}</Subheading>
        <div
          css={css`
            flex-grow: 1;
          `}
        />
        <Button>Random Team</Button>
      </div>
      <SearchPokemon onChange={addPokemon} placeholder="Caught a pokemon..." />
      {run.pokemon.map(p => (
        <PokemonCard
          key={p.runId}
          pokemon={p}
          removePokemon={removePokemon(p.runId)}
          updatePokemon={updatePokemon(p.runId)}
        />
      ))}
      <Modal open={showConfirm} onClose={() => setShowConfirm(false)} title="Confirm delete">
        Are you sure you want to delete this run? This cannot be undone.
        <div
          css={css`
            display: flex;
            justify-content: flex-end;
            margin-top: ${space.m};
          `}>
          <Button onClick={doDeleteRun}>Delete</Button>
          <Button
            styleType="hollow"
            css={css`
              margin-left: ${space.s};
            `}
            onClick={() => setShowConfirm(false)}>
            Cancel
          </Button>
        </div>
      </Modal>
    </div>
  );
};
