import React, { Component } from 'react';

interface ContactLinkProps {
    href: string;
}

export default class ContactLink extends Component<ContactLinkProps, {}> {
    public render() {
        const linkStyle: React.CSSProperties = {
            alignItems: 'center',
            display: 'flex'
        };
        return <a className="ContactLinkComponent" style={linkStyle} href={this.props.href}>{this.props.children}</a>;
    }
}
