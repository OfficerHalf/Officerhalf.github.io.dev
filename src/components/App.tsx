import React from 'react';
import { HashRouter, Switch, Route } from 'react-router-dom';
import Home from '../pages/Home';
import Generators from '../pages/Generators';

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
            <div className="container">
                <HashRouter>
                    <Switch>
                        <Route exact={true} path="/" component={Home} />
                        <Route path="/dnd" component={Generators} />
                    </Switch>
                </HashRouter>
            </div>
        );
    }
}

export default App;
