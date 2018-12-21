import React, { Component } from 'react';
import { Project } from '../../../Models/Project';
import ProjectCard from './ProjectCard/ProjectCard';
import slugify from 'slugify';

interface ProjectsSectionProps {
    projects: Project[];
}

export default class ProjectsSection extends Component<ProjectsSectionProps, {}> {
    public render() {
        return (
            <div>
                <h1>projects</h1>
                <div>{this.getProjects()}</div>
            </div>
        );
    }

    private getProjects(): JSX.Element[] {
        const cards: JSX.Element[] = [];
        this.props.projects.forEach(project => {
            const key = slugify(project.name);
            cards.push(<ProjectCard key={key} project={project}/>);
        });
        return cards;
    }
}
