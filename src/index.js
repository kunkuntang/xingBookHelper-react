import React from 'react';
import ReactDOM from 'react-dom';
// import App from './App';
import './index.css';

import injectTapEventPlugin from 'react-tap-event-plugin';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import MyAwesomeReactComponent from './MyAwesomeReactComponent';
injectTapEventPlugin();

const App = () => (
  <MuiThemeProvider>
    <MyAwesomeReactComponent />
  </MuiThemeProvider>
);
 
ReactDOM.render(
  <App />,
  document.getElementById('app')
);


// ReactDOM.render(
//   <App />,
//   <Material />,
//   document.getElementById('root')
// );
