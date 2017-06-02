import React from 'react';
import ReactDOM from 'react-dom';
// import App from './App';
import './index.css';

import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom'

import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

import Login from './login/index.js'
import BookList from './bookList/index.js'
import AddBookList from './addBookList/index.js'
// import BasicExample from './BasicExample.js'

const App = () => (
    <Router>
      <div>
        <Route exact path="/" component={Login}/>
        <Route exact path="/bookList" component={BookList}/>
        <Route exact path="/addBookList" component={AddBookList} />
      </div>
  </Router>
);
 
ReactDOM.render(
  <App />,
  document.getElementById('root')
);
