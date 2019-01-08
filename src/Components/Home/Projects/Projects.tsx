import React, { Component } from 'react';
import { Project, ProjectStatus } from '../../../Models/Project';
import ProjectComponent from './Project';

interface ProjectsProps {
    projects: Project[];
}

const projectStyles: React.CSSProperties = {
    margin: 0,
    padding: 0
}

export default class Projects extends Component<ProjectsProps, {}> {
    public render() {
        return (
            <div>
                <h2>Projects</h2>
                <ul style={projectStyles}>
                    {this.renderProjects()}
                </ul>
            </div>
        );
    }

    private renderProjects(): JSX.Element[] {
        const projects: JSX.Element[] = [];
        this.props.projects.forEach(project => {
            if (project.status === ProjectStatus.Complete) {
                const projectItem = <ProjectComponent key={project.name} project={project}/>
                projects.push(projectItem);
            }
        });
        return projects;
    }
}
