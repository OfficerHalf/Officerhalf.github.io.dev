import React from 'react';
import { RouteComponentProps, withRouter, Link } from 'react-router-dom';
import './NavBar.css';

const style: React.CSSProperties = {
    backgroundColor: 'white',
    borderBottom: '1px solid #eee',
    borderTop: '1px solid #eee',
    fontSize: 13,
    fontWeight: 600,
    height: 60,
    letterSpacing: '.2rem',
    lineHeight: '6.5rem',
    textTransform: 'uppercase'
};

const clearStyle: React.CSSProperties = {
    color: 'inherit',
    textDecoration: 'none'
};

const linkStyle: React.CSSProperties = {
    marginRight: 35
};

class NavBar extends React.PureComponent<RouteComponentProps> {
    public render() {
        return (
            <nav className="u-full-width" style={style}>
                <div className="container navLinks">
                    {this.props.location.pathname !== '/' && (
                        <span style={linkStyle} onClick={this.goUp}>
                            Back
                        </span>
                    )}
                    <Link to="/" style={clearStyle}>
                        <span style={linkStyle}>Home</span>
                    </Link>
                    <Link to="/dnd" style={clearStyle}>
                        <span style={linkStyle}>D&D</span>
                    </Link>
                    <Link to="/recipes" style={clearStyle}>
                        <span style={linkStyle}>Recipes</span>
                    </Link>
                </div>
            </nav>
        );
    }
    private goUp = () => {
        const path = this.props.location.pathname;
        if (path !== '/') {
            const prevPath = path.substring(0, path.lastIndexOf('/'));
            if (prevPath !== '') {
                this.props.history.push(prevPath);
            } else {
                this.props.history.push('/');
            }
        }
    };
}

export default withRouter(NavBar);
