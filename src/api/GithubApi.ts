import axios, { AxiosInstance, AxiosResponse } from 'axios';
import * as Types from '../types/GithubTypes';

export default class GithubApi {
    private api: AxiosInstance;
    constructor() {
        this.api = axios.create({
            baseURL: 'https://api.github.com/'
        });
    }

    public GetReadmeByRepoUrl(url: string): Promise<string> {
        const [username, repo] = url.split('/').slice(-2);
        return this.api
            .get(`/repos/${username}/${repo}/readme`, {
                headers: {
                    Accept: 'application/vnd.github.v3.html'
                }
            })
            .then((resp: Types.ButterResponseReadmeHtml) => {
                return resp.data;
            });
    }
}
