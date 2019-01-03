import React, { Component } from 'react';

export default class NameCard extends Component {
    public render() {
        const nameStyle: React.CSSProperties = {
            fontSize: '3.5em',
            fontWeight: 700,
            marginBottom: '10px',
            marginTop: 0
        };
        const titleStyle: React.CSSProperties = {
            fontSize: '2em',
            marginTop: 0
        };
        return (
            <div className="NameCardComponent">
                <h1 style={nameStyle}>Nathan Smith</h1>
                <h2 style={titleStyle}>Software Developer</h2>
            </div>
        );
    }
}
