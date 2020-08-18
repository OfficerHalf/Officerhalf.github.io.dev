import React from 'react';
import slugify from 'slugify';
import { RandomizerRunCollection, RandomizerRunFile, RandomizerSettings } from '../../types/pokemon';
import { createJsonGist, getGistByFileName, GistFile, updateJsonGist } from '../util/github';
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
        runFiles.push(JSON.parse(content));
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
      let run: RandomizerRunFile = { name: 'Randomizer', pokemon: [], team: [] };
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
      const runSlug = slugify(run.name);
      const gistFile: GistFile = {
        fileName: `${runSlug}.json`,
        content: run
      };
      const settings: RandomizerSettings = {
        lastSelectedRun: run.name
      };
      const settingsFile: GistFile = {
        content: settings,
        fileName: RandomizerSettingsFileName
      };

      // Create/update the gist
      const token = await getToken();
      if (gistId !== '') {
        await updateJsonGist(token, gistId, [gistFile, settingsFile]);
      } else {
        await createJsonGist(token, [gistFile, settingsFile]);
      }
    },
    [getToken, runs.gistId]
  );

  return { loadRun, saveRun };
}
