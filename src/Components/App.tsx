import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './Home/Home';
import Sudoku from '../Sudoku/Components/Board';

const About = () => <h2>About</h2>;
const Users = () => <h2>Users</h2>;

class App extends Component {
    public render() {
        return (
            <Switch>
                <Route path="/" exact={true} component={Home} />
                <Route path="/about/" component={About} />
                <Route path="/users/" component={Users} />
                <Route path="/sudoku/" component={Sudoku} />
            </Switch>
        );
    }
}

export default App;
