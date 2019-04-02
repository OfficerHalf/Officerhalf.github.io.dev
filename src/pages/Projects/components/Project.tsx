import React from 'react';
import * as Types from '../../../types/ProjectTypes';
import ProjectApi from '../../../api/ProjectApi';
import GithubApi from '../../../api/GithubApi';
import Fader from '../../../components/Fader';
import { StripGithubAnchorLinks } from '../../../Utilities';

interface ProjectProps {
    name: string;
}

interface ProjectState {
    project: Types.Project;
}

export default class Project extends React.PureComponent<
    ProjectProps,
    ProjectState
> {
    private projectApi: ProjectApi;
    private githubApi: GithubApi;
    constructor(props: ProjectProps) {
        super(props);
        this.projectApi = new ProjectApi();
        this.githubApi = new GithubApi();
        this.state = {
            project: {
                body: '',
                description: '',
                icon: '',
                more: '',
                name: '',
                status: Types.ProjectStatus.Complete
            }
        };
    }

    public componentDidMount() {
        this.projectApi.GetProjectByName(this.props.name).then(project => {
            if (project.body === '' && this.isGithubProject(project.more)) {
                this.githubApi
                    .GetReadmeByRepoUrl(project.more)
                    .then(readmeText => {
                        project.body = StripGithubAnchorLinks(readmeText);
                        this.setState({ project });
                    });
            } else {
                this.setState({ project });
            }
        });
    }

    public render() {
        return (
            <div className="container">
                <Fader>
                    <div
                        dangerouslySetInnerHTML={{
                            __html: this.state.project.body
                        }}
                    />
                </Fader>
            </div>
        );
    }

    private isGithubProject(url: string): boolean {
        return url.startsWith('https://github.com/');
    }
}
