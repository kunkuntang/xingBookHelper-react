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
      <div>
        <Login test="name"/>
        up is login out of router
      <Router>
        <div>
          <Route exact path="/" component={Login} test="name2" bookList={this.state.bookList} setBookList={this.setBookList} />
          <Route exact path="/bookList" component={BookList} />
          <Route exact path="/addBookList" component={AddBookList} bookList={this.state.bookList} />
          {this.bookList}
        </div>
      </Router>
      </div>
    );
  }
}

export default App