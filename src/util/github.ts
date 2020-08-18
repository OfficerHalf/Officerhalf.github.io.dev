import { Octokit } from '@octokit/rest';

export interface GistFile {
  fileName: string;
  content: object;
}

interface GistFileCollection {
  [fileName: string]: {
    content: string;
  };
}

export async function getGistPage(token: string, page: number) {
  const octokit = new Octokit({ auth: token });
  const resp = await octokit.gists.list({ page });
  if (resp.status >= 200 && resp.status <= 299 && resp.data) {
    return resp.data;
  } else {
    return [];
  }
}

export async function getGists(token: string) {
  let last: any[] = [];
  let page = 2;
  let gists = await getGistPage(token, 1);
  do {
    last = await getGistPage(token, page);
    if (last.length > 0) {
      gists = [...gists, ...last];
      page += 1;
    }
  } while (last.length > 0);
  return gists;
}

export async function getGistByFileName(token: string, fileName: string) {
  const gists = await getGists(token);
  const gist = gists.find(g => {
    const fileNames = Object.keys(g.files);
    return fileNames.some(name => name === fileName);
  });
  if (gist && gist.id) {
    const octokit = new Octokit({ auth: token });
    const resp = await octokit.gists.get({ gist_id: gist.id });
    if (resp.status >= 200 && resp.status <= 299) {
      return resp.data;
    }
  }
  return null;
}

export async function createJsonGist(token: string, files: GistFile[], description?: string) {
  const octokit = new Octokit({ auth: token });
  const createFiles: GistFileCollection = {};
  files.forEach(f => {
    createFiles[f.fileName] = {
      content: JSON.stringify(f.content)
    };
  });

  const resp = await octokit.gists.create({ files: createFiles, description });
  return resp.data.id;
}

export async function updateJsonGist(token: string, gistId: string, files: GistFile[], description?: string) {
  const octokit = new Octokit({ auth: token });
  const updateFiles: GistFileCollection = {};
  files.forEach(f => {
    updateFiles[f.fileName] = {
      content: JSON.stringify(f.content)
    };
  });

  const resp = await octokit.gists.update({ gist_id: gistId, files: updateFiles as any, description });
  return resp;
}
