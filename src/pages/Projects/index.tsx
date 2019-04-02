import React from 'react';
import { RouteComponentProps, Switch, Route } from 'react-router-dom';
import ProjectList from './components/ProjectList';
import Project from './components/Project';
import ProjectApi from '../../api/ProjectApi';
import * as Types from '../../types/ProjectTypes';

interface ProjectRouteParams {
    project: string;
}

interface ProjectsState {
    projects: Types.Project[];
}

export default class Projects extends React.PureComponent<
    RouteComponentProps,
    ProjectsState
> {
    private api: ProjectApi;
    constructor(props: RouteComponentProps) {
        super(props);
        this.api = new ProjectApi();
        this.state = {
            projects: []
        };
    }

    public componentDidMount() {
        this.api.GetProjects().then(projects => {
            this.setState({ projects });
        });
    }

    public render() {
        return (
            <div className="container">
                <Switch>
                    <Route
                        exact={true}
                        path="/projects"
                        render={this.projectList}
                    />
                    <Route path="/projects/:project" render={this.project} />
                </Switch>
            </div>
        );
    }

    private projectList = () => {
        return <ProjectList projects={this.state.projects} />;
    };

    private project = (props: RouteComponentProps<ProjectRouteParams>) => {
        return <Project name={props.match.params.project} />;
    };
}
