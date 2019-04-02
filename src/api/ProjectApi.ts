import axios, { AxiosInstance, AxiosResponse } from 'axios';
import { AwBeans, ContentEndpoint } from './ApiConstants';
import * as Types from '../types/ProjectTypes';

export default class ProjectApi {
    private api: AxiosInstance;
    constructor() {
        this.api = axios.create({
            baseURL: ContentEndpoint,
            params: {
                auth_token: AwBeans,
                keys: 'project'
            }
        });
    }

    public GetProjects(): Promise<Types.Project[]> {
        return this.api
            .get('')
            .then((resp: AxiosResponse<Types.ButterResponseProject>) => {
                return resp.data.data.project;
            });
    }

    public GetProjectsWithStatus(
        status: Types.ProjectStatus
    ): Promise<Types.Project[]> {
        return this.api
            .get('', {
                params: {
                    keys: `project[status=${status}]`
                }
            })
            .then((resp: AxiosResponse<Types.ButterResponseProject>) => {
                return resp.data.data.project;
            });
    }

    public GetProjectByName(name: string): Promise<Types.Project> {
        return this.api
            .get('', {
                params: {
                    keys: `project[name=${name}]`
                }
            })
            .then((resp: AxiosResponse<Types.ButterResponseProject>) => {
                let project: Types.Project = {
                    body: '',
                    description: '',
                    icon: '',
                    more: '',
                    name: '',
                    status: Types.ProjectStatus.Complete
                };
                if (resp.data.data.project.length > 0) {
                    project = resp.data.data.project[0];
                }
                return project;
            });
    }
}
