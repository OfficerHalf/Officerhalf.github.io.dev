import React, { Component } from 'react';
import './Section.scss';

interface SectionProps {
    title: string;
}

export default class Section extends Component<SectionProps, {}> {
    public render() {
        return (
            <div className="SectionComponent">
                <h1 className="title">{this.props.title}</h1>
                <div className="content">
                    {this.props.children}
                </div>
            </div>
        );
    }
}
