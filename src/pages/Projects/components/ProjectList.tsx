import React from 'react';
import { Link } from 'react-router-dom';
import * as Types from '../../../types/ProjectTypes';

interface ProjectListProps {
    projects: Types.Project[];
}

export default class ProjectList extends React.PureComponent<ProjectListProps> {
    public render() {
        return (
            <div>
                <ul>{this.getProjects()}</ul>
            </div>
        );
    }

    private getProjects = () => {
        const projects: JSX.Element[] = [];
        this.props.projects.forEach(project => {
            projects.push(
                <li key={project.name}>
                    <Link to={`/projects/${project.name}`}>{project.name}</Link>
                </li>
            );
        });
        return projects;
    };
}
