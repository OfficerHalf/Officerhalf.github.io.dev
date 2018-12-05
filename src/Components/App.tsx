import React, { Component } from 'react';
import { HashRouter, Route, Link, Switch } from 'react-router-dom';

const Index = () => <h2>Home</h2>;
const About = () => <h2>About</h2>;
const Users = () => <h2>Users</h2>;

class App extends Component {
  public render() {
    return (
      <HashRouter>
        <Switch>
          <Route path="/" exact={true} component={Index}/>
          <Route path="/about/" component={About}/>
          <Route path="/users/" component={Users}/>
        </Switch>
      </HashRouter>
    );
  }
}

export default App;
