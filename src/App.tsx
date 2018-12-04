import React, { Component } from 'react';
import { HashRouter, Route, Link } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';

const Index = () => <h2>Home</h2>;
const About = () => <h2>About</h2>;
const Users = () => <h2>Users</h2>;

class App extends Component {
  render() {
    return (
      <HashRouter>
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <p>
              Edit <code>src/App.js</code> and save to reload. Done?
              <Link to="/">Home</Link>
              <Link to="/about/">About</Link>
              <Link to="/users/">Users</Link>
            </p>
            <a
              className="App-link"
              href="https://reactjs.org"
              target="_blank"
              rel="noopener noreferrer"
            >
              Learn React
            </a>
          </header>
          <Route path="/" exact component={Index}/>
          <Route path="/about/" component={About}/>
          <Route path="/users/" component={Users}/>
        </div>
      </HashRouter>
    );
  }
}

export default App;
