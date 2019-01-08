import React, { Component } from 'react';
import { Project } from '../../../Models/Project';

interface AProjectProps {
    project: Project;
}

const iconStyle: React.CSSProperties = {
    maxWidth: '25px',
    maxHeight: '25px'
}

const projectStyle: React.CSSProperties = {
    listStyle: 'none'
}

const rowStyle: React.CSSProperties = {
    display: 'flex',
    alignItems: 'center'
}

export default class AProject extends Component<AProjectProps, {}> {
    public render() {
        return (
            <li style={projectStyle}>
                <span style={rowStyle}>
                    <img style={iconStyle} src={this.props.project.icon} alt={this.props.project.name}/>
                    &nbsp;&nbsp;{this.props.project.name}
                </span>
            </li>
        );
    }
}