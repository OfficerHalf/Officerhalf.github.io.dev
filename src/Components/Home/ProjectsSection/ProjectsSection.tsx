import React, { Component } from 'react';
import { Project } from '../../../Models/Project';
import ProjectCard from './ProjectCard/ProjectCard';
import slugify from 'slugify';
import Expander from '../../Expander/Expander';
import './ProjectsSection.scss';

interface ProjectsSectionProps {
    projects: Project[];
}

export default class ProjectsSection extends Component<ProjectsSectionProps, {}> {
    private expanders: Array<React.RefObject<Expander>>;
    constructor(props: ProjectsSectionProps) {
        super(props);
        this.expanders = [];
        this.expanders.push(React.createRef<Expander>());
        this.expanders.push(React.createRef<Expander>());
        this.expanders.push(React.createRef<Expander>());
    }
    public render() {
        const projects = this.getProjects();
        return (
            <div className="ProjectsSectionComponent">
                <h1>projects</h1>
                <Expander label="Completed Projects" ref={this.expanders[0]} expandCallback={this.expanderChange} startExpanded={true}>
                    {this.renderProjects(projects.Complete)}
                </Expander>
                <Expander label="Ongoing Projects" ref={this.expanders[1]} expandCallback={this.expanderChange}>
                    {this.renderProjects(projects.Ongoing)}
                </Expander>
                <Expander label="On Hold Projects" ref={this.expanders[2]} expandCallback={this.expanderChange}>
                    {this.renderProjects(projects.OnHold)}
                </Expander>
            </div>
        );
    }

    private getProjects(): ProjectCollection {
        const collection: ProjectCollection = {
            Complete: [],
            OnHold: [],
            Ongoing: []
        };
        this.props.projects.forEach(project => {
            if (project.status === 'Ongoing') {
                collection.Ongoing.push(project);
            } else if (project.status === 'Complete') {
                collection.Complete.push(project);
            } else if (project.status === 'On Hold') {
                collection.OnHold.push(project);
            }
        });
        return collection;
    }

    private renderProjects(projects: Project[]): JSX.Element[] {
        const cards: JSX.Element[] = [];
        projects.forEach(project => {
            const key = slugify(project.name);
            cards.push(<ProjectCard key={key} project={project}/>);
        });
        return cards;
    }

    private expanderChange = (expander: Expander) => {
        this.expanders.forEach(ex => {
            ex.current!.collapse();
        });
        expander.expand();
    }

}

interface ProjectCollection {
    Complete: Project[];
    Ongoing: Project[];
    OnHold: Project[];
}
