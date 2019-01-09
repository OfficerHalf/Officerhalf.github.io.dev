import React, { Component } from 'react';
import { Project, ProjectStatus } from '../../../Models/Project';
import ProjectComponent from './Project';
import { Measures } from '../../../Constants';

interface ProjectsProps {
    projects: Project[];
}

const projectStyles: React.CSSProperties = {
    paddingLeft: Measures.l + Measures.s
};

export default class Projects extends Component<ProjectsProps, {}> {
    private projectRefs: Array<React.RefObject<ProjectComponent>> = [];
    public render() {
        if (this.projectRefs.length !== this.props.projects.length) {
            this.projectRefs = [];
            for (const _ of this.props.projects) {
                const ref = React.createRef<ProjectComponent>();
                this.projectRefs.push(ref);
            }
        }
        return (
            <div>
                <h2>Projects</h2>
                <ul style={projectStyles}>
                    {this.renderProjects()}
                </ul>
            </div>
        );
    }

    public projectClicked = (clicked: ProjectComponent) => {
        for (const project of this.projectRefs) {
            if (project.current && project.current !== clicked) {
                project.current.collapse();
            }
        }
    }

    private renderProjects(): JSX.Element[] {
        const projects: JSX.Element[] = [];
        this.props.projects.forEach((project, index) => {
            if (project.status === ProjectStatus.Complete) {
                const projectItem = <ProjectComponent key={project.name} project={project} ref={this.projectRefs[index]} expandCallback={this.projectClicked}/>;
                projects.push(projectItem);
            }
        });
        return projects;
    }
}
