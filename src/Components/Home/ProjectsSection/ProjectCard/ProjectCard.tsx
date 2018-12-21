import React, { Component } from 'react';
import { Project } from '../../../../Models/Project';
import './ProjectCard.scss';

interface ProjectCardProps {
    project: Project;
}

export default class ProjectCard extends Component<ProjectCardProps, {}> {
    public render() {
        return (
            <div className="ProjectCardComponent">
                <div dangerouslySetInnerHTML={{__html: this.props.project.description}}/>
                <div>{this.props.project.name}</div>
                <div>{this.props.project.status}</div>
                <img className="projectIcon" src={this.props.project.icon} alt=""/>
                <a href={this.props.project.more}>More Info</a>
            </div>
        );
    }
}
