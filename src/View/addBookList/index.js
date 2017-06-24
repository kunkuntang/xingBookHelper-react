import React, { Component } from 'react';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';

import AppBar from '../../components/appBar.js'
import Drawer from '../../components/drawer.js'

import {
  Link
} from 'react-router-dom'

import './index.css'

let floatingLabelStyle = {
  color: '#000000',
  fontSize: '1.2rem'
}

class addBookList extends React.Component {
  
  constructor(props) {
    super(props)
    this.state = {open: false};
  }

  drawerToggle = () => this.setState({open: !this.state.open});

  render() {
    return (
      <div className="addBookListCon">
        <MuiThemeProvider><Drawer isOpen={this.state.open} handleToggle={ isOpen => this.drawerToggle(isOpen)} /></MuiThemeProvider>
        <MuiThemeProvider><AppBar handleToggle={ isOpen => this.drawerToggle(isOpen)} /></MuiThemeProvider>
        <MuiThemeProvider><TextField floatingLabelText="书单名：" floatingLabelStyle={floatingLabelStyle} /></MuiThemeProvider>
        <MuiThemeProvider><TextField floatingLabelText="书名：" floatingLabelStyle={floatingLabelStyle} /></MuiThemeProvider>
        <MuiThemeProvider><TextField floatingLabelText="价格：" floatingLabelStyle={floatingLabelStyle} /></MuiThemeProvider>
        <MuiThemeProvider><TextField floatingLabelText="原价：" floatingLabelStyle={floatingLabelStyle} /></MuiThemeProvider>
        <MuiThemeProvider><TextField floatingLabelText="折扣：" floatingLabelStyle={floatingLabelStyle} /></MuiThemeProvider>
        <div className="footerBar">
          <MuiThemeProvider><RaisedButton label="完成" /></MuiThemeProvider>
        </div>
        
      </div>
    )
  }
}

export default addBookList;