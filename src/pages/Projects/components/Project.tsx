import React from 'react';
import * as Types from '../../../types/ProjectTypes';
import ProjectApi from '../../../api/ProjectApi';
import GithubApi from '../../../api/GithubApi';
import Fader from '../../../components/Fader';
import Loader from '../../../components/Loader';
import { Colors } from '../../../Constants';

interface ProjectProps {
    name: string;
}

interface ProjectState {
    project: Types.Project;
    loading: boolean;
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
            },
            loading: true
        };
    }

    public componentDidMount() {
        this.projectApi.GetProjectByName(this.props.name).then(project => {
            if (project.body === '' && this.isGithubProject(project.more)) {
                this.githubApi.GetReadmeByRepoUrl(project.more).then(html => {
                    project.body = html;
                    this.setState({ project, loading: false });
                });
            } else {
                this.setState({ project, loading: false });
            }
        });
    }

    public render() {
        const isGithub = this.isGithubProject(this.state.project.more);
        const bodyClasses = isGithub ? 'markdown-body' : '';
        return (
            <div>
                <Loader
                    loading={this.state.loading}
                    size={8}
                    color={Colors.accentDark}
                />
                <Fader>
                    <div>
                        {isGithub && !this.state.loading && (
                            <div style={{ marginTop: 20, marginBottom: 20 }}>
                                <a
                                    href={this.state.project.more}
                                    target="_blank"
                                >
                                    See the source on GitHub.
                                </a>
                            </div>
                        )}
                        <div
                            className={bodyClasses}
                            dangerouslySetInnerHTML={{
                                __html: this.state.project.body
                            }}
                        />
                    </div>
                </Fader>
            </div>
        );
    }

    private isGithubProject(url: string): boolean {
        return url.startsWith('https://github.com/');
    }
}
