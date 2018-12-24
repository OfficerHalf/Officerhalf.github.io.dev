import React, { Component } from 'react';
import { Project } from '../../../Models/Project';
import ProjectCard from './ProjectCard/ProjectCard';
import slugify from 'slugify';
import Expander from '../../Expander/Expander';

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
    }
    public render() {
        return (
            <div>
                <h1>projects</h1>
                <Expander label="Some Expander" ref={this.expanders[0]} expandCallback={this.expanderChange} startExpanded={true}>
                Some content
                </Expander>
                <Expander label="Some Other Expander" ref={this.expanders[1]} expandCallback={this.expanderChange}>
                Some other content
                </Expander>
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

    private expanderChange = (expander: Expander) => {
        this.expanders.forEach(ex => {
            ex.current!.collapse();
        });
        expander.expand();
    }
}
