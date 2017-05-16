import React from 'react';
import ReactDOM from 'react-dom';
// import App from './App';
import { Router, Route, Link } from 'react-router';
import './index.css';

import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Login from './login/index.js'

const App = () => (
  <MuiThemeProvider>
    <Login />
  </MuiThemeProvider>
);
 
ReactDOM.render(
  <App />,
  document.getElementById('root')
);


