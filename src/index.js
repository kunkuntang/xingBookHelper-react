import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import App from './containers/App';
import './index.css';


import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

// import ToDoList from './containers/App.js'
import todoApp from './reducers'
// import BasicExample from './BasicExample.js'


let store = createStore(todoApp)

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);



