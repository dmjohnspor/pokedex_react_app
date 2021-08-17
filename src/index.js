import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { HashRouter as Router } from 'react-router-dom';
import { createBrowserHistory } from 'history';

const history = createBrowserHistory();

ReactDOM.render(
  <React.StrictMode>
    <Router basename={process.env.PUBLIC_URL} history={history}>
      <App />
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);
