import React from 'react';
import { RouteComponentProps, Link } from 'react-router-dom';
import { Shuffle } from '../../Utilities';
import { Colors } from '../../Constants';
import ProjectApi from '../../api/ProjectApi';
import * as ProjectTypes from '../../types/ProjectTypes';
import './index.css';

interface HomeState {
    projects: ProjectTypes.Project[];
}

export default class Home extends React.PureComponent<
    RouteComponentProps,
    HomeState
> {
    private api: ProjectApi;
    constructor(props: RouteComponentProps) {
        super(props);
        this.state = {
            projects: []
        };
        this.api = new ProjectApi();
    }

    public componentDidMount() {
        this.api
            .GetProjectsWithStatus(ProjectTypes.ProjectStatus.Complete)
            .then(projects => {
                this.setState({ projects });
            });
    }

    public render() {
        return (
            <div className="container">
                <div className="row" style={{ marginTop: 25 }}>
                    <div className="one-third column">
                        <h4>
                            Nathan Smith
                            <br />
                            Software Developer
                        </h4>
                        <p>
                            Associate Software Developer at{' '}
                            <a href="https://www.bentley.com/en">
                                Bentley Systems
                            </a>
                            . I have a passion for software development, music,
                            and video games.
                        </p>
                    </div>
                    <div className="two-thirds column">
                        <p>Check out one of these projects:</p>
                        <ul>{this.getRandomProjects()}</ul>
                    </div>
                </div>
                <div className="row">
                    <hr
                        style={{
                            marginTop: 0,
                            marginBottom: 20,
                            borderColor: `${Colors.black2}`
                        }}
                    />
                    <div className="contactLinks" style={{ fontSize: 25 }}>
                        <a
                            href="mailto:nathan@nathan-smith.org"
                            target="_blank"
                        >
                            <i className="fas fa-envelope" />
                        </a>
                        <a href="https://github.com/OfficerHalf">
                            <i className="fab fa-github" />
                        </a>
                        <a href="https://www.linkedin.com/in/nathan-r-smith/">
                            <i className="fab fa-linkedin" />
                        </a>
                    </div>
                </div>
            </div>
        );
    }

    private getRandomProjects(): JSX.Element[] {
        const select = Math.min(3, this.state.projects.length);
        const projects: JSX.Element[] = [];
        if (select > 0) {
            const shuffled: ProjectTypes.Project[] = Shuffle(
                this.state.projects
            );
            for (let i = 0; i < select; i++) {
                projects.push(
                    <li key={shuffled[i].name}>
                        <Link to={`/projects/${shuffled[i].name}`}>
                            {shuffled[i].name}
                        </Link>
                    </li>
                );
            }
        }
        return projects;
    }
}
