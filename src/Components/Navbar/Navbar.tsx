import React, { Component } from 'react';
import Logo from '../Logo/Logo';
import './Navbar.scss';

export default class Navbar extends Component {
    public render() {
        return (
            <nav className="NavbarComponent">
                <Logo color="white"/>
            </nav>
        );
    }
}
