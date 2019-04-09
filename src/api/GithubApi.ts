import axios, { AxiosInstance } from 'axios';
import * as Types from '../types/GithubTypes';
import * as StorageHelper from '../StorageHelper';

const LocalStoragePrefix: string = 'OFFICERHALF:GITHUBAPI:';

export default class GithubApi {
    private api: AxiosInstance;
    constructor() {
        this.api = axios.create({
            baseURL: 'https://api.github.com/'
        });
    }

    public GetReadmeByRepoUrl(url: string): Promise<string> {
        const cacheKey = `${LocalStoragePrefix}${url}`;
        const cached = StorageHelper.getString(cacheKey);
        if (cached === null) {
            const [username, repo] = url.split('/').slice(-2);
            return this.GetReadmeRaw(username, repo).then(raw => {
                return this.MarkdownToHtml(raw).then(html => {
                    StorageHelper.setString(html, cacheKey);
                    return html;
                });
            });
        } else {
            return Promise.resolve(cached);
        }
    }

    public GetReadmeRaw(username: string, repo: string): Promise<string> {
        return this.api
            .get(`/repos/${username}/${repo}/readme`, {
                headers: { Accept: 'application/vnd.github.v3.raw' }
            })
            .then((resp: Types.ButterResponseGithub) => {
                return resp.data;
            });
    }

    public MarkdownToHtml(md: string): Promise<string> {
        return this.api
            .post('markdown', {
                text: md,
                mode: 'gfm',
                context: 'github/OfficerHalf'
            })
            .then((resp: Types.ButterResponseGithub) => {
                return resp.data;
            });
    }
}
