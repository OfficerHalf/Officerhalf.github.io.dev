import React, { Component } from 'react';
import './MoreInfoButton.scss';

interface MoreInfoButtonProps {
    href: string;
}

export default class MoreInfoButton extends Component<MoreInfoButtonProps, {}> {
    public render() {
        return (
            <a href={this.props.href} className="MoreInfoButtonComponent">
                    More Info
            </a>
        );
    }
}