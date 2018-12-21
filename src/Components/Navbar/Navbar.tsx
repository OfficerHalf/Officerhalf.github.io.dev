import React, { Component } from 'react';
import Logo from '../Logo/Logo';
import './Navbar.scss';
import { Colors } from '../../Constants';

export default class Navbar extends Component {
    public render() {
        return (
            <nav className="NavbarComponent">
                <Logo color={Colors.light}/>
            </nav>
        );
    }
}
