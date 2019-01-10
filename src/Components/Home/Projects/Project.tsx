import React, { Component } from 'react';
import { Project } from '../../../Models/Project';
// import { Measures } from '../../../Constants';
import Expander from '../../Expander/Expander';
import { Measures, Colors } from '../../../Constants';
import PlusMinus from './PlusMinus';

interface AProjectProps {
    project: Project;
    expandCallback?: (project: AProject) => void;
}

interface AProjectState {
    expanded: boolean;
    hovered: boolean;
}

const mainStyle: React.CSSProperties = {
    marginBottom: Measures.s
};

const iconStyle: React.CSSProperties = {
    marginRight: Measures.m,
    maxHeight: '50px',
    maxWidth: '50px'
};

const expandedStyle: React.CSSProperties = {
    alignItems: 'center',
    display: 'flex'
};

const titleStyle: React.CSSProperties = {
    alignItems: 'center',
    cursor: 'pointer',
    display: 'flex'
};

const moreInfoStyle: React.CSSProperties = {
    flexShrink: 0,
    marginLeft: Measures.m
};

const spacerStyle: React.CSSProperties = {
    marginRight: Measures.nbsp
};

export default class AProject extends Component<AProjectProps, AProjectState> {
    constructor(props: AProjectProps) {
        super(props);
        this.state = {
            expanded: false,
            hovered: false
        };
    }
    public render() {
        return (
            <li className="AProjectComponent" style={mainStyle}>
                <span onClick={this.clicked} style={titleStyle}><span className="projectTitle" style={spacerStyle}>{this.props.project.name} - {this.props.project.tagline}</span><PlusMinus size={14} minus={this.state.expanded} color={Colors.darkGray}/></span>
                <Expander expanded={this.state.expanded}>
                    <div style={expandedStyle}>
                        <img className="projectIcon" src={this.props.project.icon} alt={`${this.props.project.name} icon`} style={iconStyle}/>
                        <div dangerouslySetInnerHTML={{__html: this.props.project.description}}/>
                        <a href={this.props.project.more} style={moreInfoStyle}>More Info</a>
                    </div>
                </Expander>
            </li>
        );
    }

    public collapse() {
        console.log("collapsing");
        this.setState({expanded: false});
    }

    private clicked = () => {
        const expanded: boolean = !this.state.expanded;
        this.setState({expanded});
        if (expanded && this.props.expandCallback) {
            this.props.expandCallback(this);
        }
    }
}
