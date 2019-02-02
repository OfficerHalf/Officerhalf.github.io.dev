import React from 'react';
import Expander, { ExpanderDirection } from './Expander';

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
                <button onClick={this.toggle}>Toggle</button>
                <Expander
                    expanded={this.state.toggle}
                    direction={ExpanderDirection.Vertical}
                >
                    <div>Some more content</div>
                </Expander>
            </div>
        );
    }
    private toggle = () => {
        this.setState({
            toggle: !this.state.toggle
        });
    };
}

export default App;
