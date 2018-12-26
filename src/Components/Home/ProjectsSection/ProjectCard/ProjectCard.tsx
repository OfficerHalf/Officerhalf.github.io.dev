import React, { Component } from 'react';
import { Project } from '../../../../Models/Project';
import MoreInfoButton from './MoreInfoButton/MoreInfoButton';
import './ProjectCard.scss';

interface ProjectCardProps {
    project: Project;
}

export default class ProjectCard extends Component<ProjectCardProps, {}> {
    public render() {
        return (
            <div className="ProjectCardComponent">
                <div className="wrapper">
                    <div className="iconSection">
                        <img className="projectIcon" src={this.props.project.icon} alt=""/>
                    </div>
                    <div className="contentSection">
                        <div className="name">{this.props.project.name}</div>
                        <div className="description" dangerouslySetInnerHTML={{__html: this.props.project.description}}/>
                        <div className="bottom">
                            <MoreInfoButton href={this.props.project.more}/>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
