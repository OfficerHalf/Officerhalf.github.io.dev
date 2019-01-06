import React, { Component } from 'react';
import { Project, ProjectStatus } from '../../../Models/Project';

interface ProjectsProps {
    projects: Project[];
}

export default class Projects extends Component<ProjectsProps, {}> {
    public render() {
        return (
            <div>
                <h2>Projects</h2>
                <ul>
                    {this.renderProjects()}
                </ul>
            </div>
        );
    }

    private renderProjects(): JSX.Element[] {
        const projects: JSX.Element[] = [];
        this.props.projects.forEach(project => {
            if (project.status === ProjectStatus.Complete) {
                const projectItem = (
                    <li>{project.name}</li>
                );
                projects.push(projectItem);
            }
        });
        return projects;
    }
}
