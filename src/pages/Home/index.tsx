import React from 'react';
import { RouteComponentProps } from 'react-router-dom';
import './index.css';

export default class Home extends React.PureComponent<RouteComponentProps> {
    public render() {
        return (
            <div className="container">
                <div className="row" style={{ marginTop: 25 }}>
                    <div className="one-third column">
                        <h4>
                            Nathan Smith
                            <br />
                            Software Developer
                        </h4>
                        <p>
                            Associate Software Developer at{' '}
                            <a href="https://www.bentley.com/en">
                                Bentley Systems
                            </a>
                            . I have a passion for open source software, music,
                            and video games.
                        </p>
                    </div>
                    <div className="two-thirds column">
                        <p>stuff</p>
                    </div>
                </div>
                <div className="row">
                    <hr style={{ marginTop: 0, marginBottom: 20 }} />
                    <div className="contactLinks" style={{ fontSize: 25 }}>
                        <a
                            href="mailto:nathan@nathan-smith.org"
                            target="_blank"
                        >
                            <i className="fas fa-envelope" />
                        </a>
                        <a href="https://github.com/OfficerHalf">
                            <i className="fab fa-github" />
                        </a>
                        <a href="https://www.linkedin.com/in/nathan-r-smith/">
                            <i className="fab fa-linkedin" />
                        </a>
                    </div>
                </div>
            </div>
        );
    }
}
