import React, { Component } from 'react';
import Logo from '../Logo/Logo';

export default class Navbar extends Component {
    public render() {
        return (
            <nav>
                <Logo/>
            </nav>
        );
    }
}
