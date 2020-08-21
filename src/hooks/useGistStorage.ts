import React from 'react';
import { v4 } from 'uuid';
import { RandomizerRunCollection, RandomizerRunFile, RandomizerSettings } from '../../types/pokemon';
import { createJsonGist, deleteGistFile, getGistByFileName, GistFile, updateJsonGist } from '../util/github';
import { useGithubToken } from './useGithubToken';

export const RandomizerSettingsFileName = '.pokemonRandomizerSettings.json';

export function useGistStorage() {
  const [runs, setRuns] = React.useState<RandomizerRunCollection>({ gistId: '', runs: [] });
  const getToken = useGithubToken();

  // Parse the contents of the given gist
  const getRunFiles = React.useCallback((gist: any) => {
    const runFiles: RandomizerRunFile[] = [];
    let settingsFile: RandomizerSettings;
    const fileNames: string[] = Object.keys(gist.files);
    fileNames.forEach(f => {
      const content: string = gist.files[f].content;
      if (f !== RandomizerSettingsFileName) {
        const jsonContent: RandomizerRunFile = JSON.parse(content);
        if (jsonContent && jsonContent.name && jsonContent.id && jsonContent.pokemon && jsonContent.team) {
          runFiles.push(JSON.parse(content));
        }
      } else {
        settingsFile = JSON.parse(content);
      }
    });

    // Update state
    setRuns({ gistId: gist.id, runs: runFiles });
    return { runFiles, settingsFile };
  }, []);

  // Return a single run from memory or github, or undefined if none is found
  const loadRun = React.useCallback(
    async (runName?: string) => {
      // Create an empty default run
      let run: RandomizerRunFile = { name: runName || 'Randomizer', pokemon: [], team: [], id: v4() };
      // Search in memory first
      if (runs.runs.length !== 0 && runName) {
        const cached = runs.runs.find(r => r.name === runName);
        if (cached) {
          return cached;
        }
      }

      // Look on github
      const token = await getToken();
      const existingGist = await getGistByFileName(token, RandomizerSettingsFileName);
      if (existingGist) {
        const { runFiles, settingsFile } = getRunFiles(existingGist);
        if (runName) {
          const namedRun = runFiles.find(r => r.name === runName);
          if (namedRun) {
            run = namedRun;
          }
        } else {
          const lastRun = runFiles.find(r => r.name === settingsFile.lastSelectedRun);
          if (lastRun) {
            run = lastRun;
          } else if (runFiles.length > 0) {
            run = runFiles[0];
          }
        }
      }

      // No matter what, return a run
      return run;
    },
    [getRunFiles, getToken, runs]
  );

  // Update
  const saveRun = React.useCallback(
    async (run: RandomizerRunFile) => {
      // Update instead of create, if we can
      let gistId = runs.gistId;
      if (gistId === '') {
        const token = await getToken();
        const existingGist = await getGistByFileName(token, RandomizerSettingsFileName);
        if (existingGist) {
          gistId = existingGist.id;
        }
      }

      // Create the updated files
      const gistFile: GistFile = {
        filename: `${run.id}.json`,
        content: run
      };
      const settings: RandomizerSettings = {
        lastSelectedRun: run.name
      };
      const settingsFile: GistFile = {
        content: settings,
        filename: RandomizerSettingsFileName
      };

      // Create/update the gist
      const token = await getToken();
      if (gistId !== '') {
        await updateJsonGist(token, gistId, [gistFile, settingsFile]);
      } else {
        const id = await createJsonGist(token, [gistFile, settingsFile]);
        const newRuns = { ...runs };
        newRuns.gistId = id;
        setRuns(newRuns);
      }
    },
    [getToken, runs]
  );

  // Delete
  const deleteRun = React.useCallback(
    async (run: RandomizerRunFile) => {
      const runIndex = runs.runs.findIndex(r => r.name === run.name);
      let gistId = runs.gistId;
      if (gistId !== '') {
        // Update the gist
        const token = await getToken();
        await deleteGistFile(token, gistId, `${run.id}.json`);
        const newRuns = [...runs.runs];
        newRuns.splice(runIndex, 1);
        setRuns({ gistId: runs.gistId, runs: newRuns });
      }
    },
    [getToken, runs.gistId, runs.runs]
  );

  return { loadRun, saveRun, deleteRun, runs };
}
