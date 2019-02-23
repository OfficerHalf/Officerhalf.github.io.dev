import React from 'react';
import { Link, RouteComponentProps } from 'react-router-dom';

export default class Home extends React.PureComponent<RouteComponentProps> {
    public render() {
        return (
            <div>
                <h1>Nathan Smith</h1>
                <p>
                    Hi, welcome to my site. Nothing really here yet - I'm
                    redoing things.
                </p>
                <ul>
                    <li>
                        <Link to="/dnd">
                            DnD Stuff (not really working yet)
                        </Link>
                    </li>
                    <li>
                        <Link to="/recipes">Recipes (nothing here yet)</Link>
                    </li>
                </ul>
            </div>
        );
    }
}
