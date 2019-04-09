import React from 'react';
import { RouteComponentProps, withRouter, Link } from 'react-router-dom';
import { Colors } from '../Constants';
import './NavBar.css';

const style: React.CSSProperties = {
    backgroundColor: Colors.accentDark,
    color: Colors.white,
    borderBottom: '1px solid #eee',
    fontSize: 13,
    fontWeight: 600,
    height: 65,
    letterSpacing: '.2rem',
    lineHeight: '6.5rem',
    textTransform: 'uppercase'
};

const clearStyle: React.CSSProperties = {
    color: 'inherit',
    textDecoration: 'none',
    display: 'inline-block',
    height: '100%'
};

const linkStyle: React.CSSProperties = {
    marginRight: 35,
    display: 'inline-block',
    height: '100%'
};

class NavBar extends React.PureComponent<RouteComponentProps> {
    public render() {
        return (
            <nav className="u-full-width" style={style}>
                <div className="container navLinks">
                    <Link to="/" style={clearStyle}>
                        <span style={linkStyle}>Home</span>
                    </Link>
                    <Link to="/projects" style={clearStyle}>
                        <span style={linkStyle}>Projects</span>
                    </Link>
                    <Link to="/dnd" style={clearStyle}>
                        <span style={linkStyle}>D&D</span>
                    </Link>
                    <Link to="/blog" style={clearStyle}>
                        <span style={linkStyle}>Blog</span>
                    </Link>
                </div>
            </nav>
        );
    }
}

export default withRouter(NavBar);
