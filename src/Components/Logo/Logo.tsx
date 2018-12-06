import React, { Component } from 'react';
import './Logo.scss';

interface LogoProps {
    color?: string;
}

export default class Logo extends Component<LogoProps, {}> {
    private color: string;
    constructor(props: LogoProps) {
        super(props);
        this.color = props.color ? props.color : '#000';
    }

    public render() {
        return (
            <span className="LogoComponent">
                <svg x="0" y="0" width="100%" height="100%" style={{borderColor: this.color}}>
                    <defs>
                        <mask id="mask" x="0" y="0" width="100%" height="100%">
                            <rect id="overlay" x="0" y="0" width="100%" height="100%"/>
                            <text id="firstName" x="27.5%" y="0" dy="40px">NATHAN</text>
                        </mask>
                    </defs>
                    <rect id="logo" x="0" y="0" width="57%" height="100%" fill={this.color}/>
                    <text id="lastName" x="78.5%" y="0" dy="40px" fill={this.color}>SMITH</text>
                </svg>
            </span>
        );
    }
}