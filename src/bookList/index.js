import React, { Component } from 'react';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import RaisedButton from 'material-ui/RaisedButton';

import AppBar from '../common/appBar.js'
import BookListCard from './listCard.js'
import Drawer from '../common/drawer.js'

let bookListData = [
  {
    listName: 'list1',
    desc: 'list1 desc'
  },
  {
    listName: 'list2',
    desc: 'list2 desc'
  },
  {
    listName: 'list3',
    desc: 'list3 desc'
  }
]

class bookList extends Component {
  constructor(props) {
    super(props);
    this.state = {open: false};
  }

  drawerToggle = () => this.setState({open: !this.state.open});

  render () {
    var bookListNodes = [];
    for(let i = 0; i < bookListData.length; i++) {
      bookListNodes.push(<MuiThemeProvider key={i}><BookListCard data={bookListData[i]} /></MuiThemeProvider>)
    }
    return (
      <div>
        <MuiThemeProvider><Drawer isOpen={this.state.open} handleToggle={ isOpen => this.drawerToggle(isOpen)} /></MuiThemeProvider>
        <MuiThemeProvider><AppBar handleToggle={ isOpen => this.drawerToggle(isOpen)} /></MuiThemeProvider>
        {bookListNodes}
      </div>
    )
  }
}

export default bookList;