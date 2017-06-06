import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import App from './containers/App';
import './index.css';

// import {
//   BrowserRouter as Router,
//   Route
// } from 'react-router-dom'

import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

// import Login from './login/index.js'
// import BookList from './bookList/index.js'
// import AddBookList from './addBookList/index.js'

// import ToDoList from './containers/App.js'
import todoApp from './reducers'
// import BasicExample from './BasicExample.js'

/*
const App = () => (
  <Router>
    <div>
      <Route exact path="/" component={Login} />
      <Route exact path="/bookList" component={BookList} />
      <Route exact path="/addBookList" component={AddBookList} />
    </div>
  </Router>
);
*/

/*class App extends React.Component {
  
  constructor(props) {
    super(props)
    this.state = {
      bookLists: [],
      bookList: {
        bookListName: '',
        bookListID: ''
      },
      book: {
        bookName: '',
        bookPrice: '',
        discount: '',
        bookListID: ''
      }
    };
  }

  setBookList (bookList) {
    this.setState({bookList: bookList})
  }

  render() {
    return (
      <Router>
        <div>
          <Route exact path="/" component={Login} bookList={this.state.bookList} setBookList={this.setBookList} />
          <Route exact path="/bookList" component={BookList} />
          <Route exact path="/addBookList" component={AddBookList} bookList={this.state.bookList} />
          <Route exact path="/toDoList" component={ToDoList} />
          {this.bookList}
        </div>
      </Router>
    );
  }
}*/

let store = createStore(todoApp)

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
