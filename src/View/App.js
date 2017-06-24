import React, { Component } from 'react'
import PropTypes from 'prop-types'
// import { connect } from 'react-redux'

import Login from './login/index.js'
import BookList from './bookList/index.js'
import AddBookList from './addBookList/index.js'

import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom'


class App extends Component {
  
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
          {this.bookList}
        </div>
      </Router>
    );
  }
}

// App.propTypes = {
//   visibleTodos: PropTypes.arrayOf(PropTypes.shape({
//     text: PropTypes.string.isRequired,
//     completed: PropTypes.bool.isRequired
//   }).isRequired).isRequired,
//   visibilityFilter: PropTypes.oneOf([
//     'SHOW_ALL',
//     'SHOW_COMPLETED',
//     'SHOW_ACTIVE'
//   ]).isRequired
// }

// function selectTodos(todos, filter) {
//   switch (filter) {
//     case VisibilityFilters.SHOW_ALL:
//       return todos
//     case VisibilityFilters.SHOW_COMPLETED:
//       return todos.filter(todo => todo.completed)
//     case VisibilityFilters.SHOW_ACTIVE:
//       return todos.filter(todo => !todo.completed)
//   }
// }

// Which props do we want to inject, given the global state?
// Note: use https://github.com/faassen/reselect for better performance.
// function select(state) {
//   return {
//     visibleTodos: selectTodos(state.todos, state.visibilityFilter),
//     visibilityFilter: state.visibilityFilter
//   }
// }

// 包装 component ，注入 dispatch 和 state 到其默认的 connect(select)(App) 中；
export default App