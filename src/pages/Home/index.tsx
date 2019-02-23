import React from 'react';
import Expander, { ExpanderDirection } from '../../components/Expander';
import { Link } from 'react-router-dom';

interface HomeState {
    toggle: boolean;
}

export default class Home extends React.PureComponent<{}, HomeState> {
    constructor(props: any) {
        super(props);
        this.state = {
            toggle: true
        };
    }
    public render() {
        return (
            <div>
                <Link to="/dnd">
                    <h3>DND</h3>
                </Link>
                <Link to="/recipes">
                    <h3>Recipes</h3>
                </Link>
            </div>
        );
    }
    private toggle = () => {
        this.setState({
            toggle: !this.state.toggle
        });
    };
}
