import React from 'react';
import ReactDOM from 'react-dom';
import { App } from './components/MetaComponents/App';
import { ThemeProvider } from 'emotion-theming';
import { theme } from './util/theme';
import * as serviceWorker from './serviceWorker';
import 'normalize.css';

const root = document.getElementById('root');
const app = (
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>
);
if (root!.hasChildNodes()) {
  ReactDOM.hydrate(app, root);
} else {
  ReactDOM.render(app, root);
}

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
