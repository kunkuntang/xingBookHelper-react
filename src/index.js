import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import App from './View/App';
import './index.css';


import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

// import ToDoList from './containers/App.js'
import reducers from './Redux/Reducer'
// import BasicExample from './BasicExample.js'


let store = createStore(reducers)

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);



