import React from 'react';
import { HashRouter, Switch, Route } from 'react-router-dom';
import NavBar from './NavBar';
import Home from '../pages/Home';
import Generators from '../pages/Generators';
import Blog from '../pages/Blog';

interface AppState {
    toggle: boolean;
}

class App extends React.Component<{}, AppState> {
    constructor(props: any) {
        super(props);
        this.state = {
            toggle: true
        };
    }
    public render() {
        return (
            <div id="AppWrapper">
                <HashRouter>
                    <div>
                        <NavBar />
                        <div>
                            <Switch>
                                <Route exact={true} path="/" component={Home} />
                                <Route path="/dnd" component={Generators} />
                                <Route path="/Blog" component={Blog} />
                            </Switch>
                        </div>
                    </div>
                </HashRouter>
            </div>
        );
    }
}

export default App;
