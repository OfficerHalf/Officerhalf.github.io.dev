import React, { Component } from 'react';
import './ContactLink.scss';

export default class ContactLink extends Component {
    public render() {
        return (
            <li className="ContactLinkComponent">
                {this.props.children}
            </li>
        );
    }
}
