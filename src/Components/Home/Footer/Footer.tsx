import React, { Component } from 'react';
import './Footer.scss';
import { Colors } from '../../../Constants';

interface FooterState {
    colors: string[];
    hovered: boolean;
}

export default class Footer extends Component<{}, FooterState> {
    private colorTimeout: number = 0;

    constructor(props: any) {
        super(props);
        this.state = {
            colors: [
                Colors.fuschia,
                Colors.blue,
                Colors.green,
                Colors.orange,
                Colors.purple,
                Colors.light
            ],
            hovered: false
        }
    }

    public render() {
        const cStyle: React.CSSProperties = {
            color: this.state.colors[0]
        };
        const oStyle: React.CSSProperties = {
            color: this.state.colors[1]
        };
        const lStyle: React.CSSProperties = {
            color: this.state.colors[2]
        };
        const oStyle2: React.CSSProperties = {
            color: this.state.colors[3]
        };
        const rStyle: React.CSSProperties = {
            color: this.state.colors[4]
        };
        const sStyle: React.CSSProperties = {
            color: this.state.colors[5]
        };
        return (
            <div className="FooterComponent">
                Like the
                <span onMouseEnter={this.colorsHover} onMouseLeave={this.colorsLeave} className="colors">
                    <span style={cStyle}> c</span><span style={oStyle}>o</span><span style={lStyle}>l</span><span style={oStyle2}>o</span><span style={rStyle}>r</span><span style={sStyle}>s</span>
                </span>? This site uses <a href="https://marketplace.visualstudio.com/items?itemName=officerhalf.alloy-theme">Alloy</a>, my theme for Visual Studio Code.
            </div>
        );
    }

    private colorsHover = () => {
        this.setState({hovered: true});
        this.colorTimeout = window.setTimeout(this.rotateColors, 200);
    }

    private colorsLeave = () => {
        clearTimeout(this.colorTimeout);
        this.setState({hovered: false});
    }

    private rotateColors = () => {
        const newColors = [...this.state.colors];
        for (let i = newColors.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [newColors[i], newColors[j]] = [newColors[j], newColors[i]];
        }
        this.setState({colors: newColors});
        this.colorTimeout = window.setTimeout(this.rotateColors, 200);
    }
}