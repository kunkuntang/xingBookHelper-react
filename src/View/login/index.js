import React from 'react';
import {
  Link
} from 'react-router-dom'

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';

import $ from 'jquery'

let floatingLabelStyle = {
  color: '#000000',
  fontSize: '1.2rem'
}

/*
const LoginPage = () => {
  let userData = null
  return (
    <div>
      <MuiThemeProvider><TextField floatingLabelText="书单名：" floatingLabelStyle={floatingLabelStyle} /></MuiThemeProvider>
      <MuiThemeProvider><TextField floatingLabelText="书名：" floatingLabelStyle={floatingLabelStyle} /></MuiThemeProvider>
      <MuiThemeProvider><TextField floatingLabelText="价格：" floatingLabelStyle={floatingLabelStyle} /></MuiThemeProvider>
      <MuiThemeProvider><TextField floatingLabelText="原价：" floatingLabelStyle={floatingLabelStyle} /></MuiThemeProvider>
      <MuiThemeProvider><TextField floatingLabelText="折扣：" floatingLabelStyle={floatingLabelStyle} /></MuiThemeProvider>
      <MuiThemeProvider>
        <Link to="/bookList"><RaisedButton label="Login" /></Link>
      </MuiThemeProvider>
    </div>
  )
};
*/

class LoginPage extends React.Component {

  constructor(props) {
    super(props)
  }

  getUserData (userID, bookList) {
    console.log('out', this)   
    let _this = this 
    $.get({
      url: 'http://localhost:8800/test',
      // url: 'http://lenkuntang.cn:8800/test',
      dataType: 'JSON',
      success: function (data) {
        console.log(data)
        console.log('inner', this)
        _this.props.setBookList(data)
      }
    })
  }

  render() {
    return (
      <div>
        <MuiThemeProvider><TextField floatingLabelText="书单名：" floatingLabelStyle={floatingLabelStyle} /></MuiThemeProvider>
        <MuiThemeProvider><TextField floatingLabelText="书名：" floatingLabelStyle={floatingLabelStyle} /></MuiThemeProvider>
        <MuiThemeProvider><TextField floatingLabelText="价格：" floatingLabelStyle={floatingLabelStyle} /></MuiThemeProvider>
        <MuiThemeProvider><TextField floatingLabelText="原价：" floatingLabelStyle={floatingLabelStyle} /></MuiThemeProvider>
        <MuiThemeProvider><TextField floatingLabelText="折扣：" floatingLabelStyle={floatingLabelStyle} /></MuiThemeProvider>
        <MuiThemeProvider>
          {/*<Link to="/bookList"><RaisedButton label="Login" onTouchTap={getUserData} /></Link>*/}
          <RaisedButton label="Login" onTouchTap={this.getUserData} />
        </MuiThemeProvider>
      </div>
    )
  }
}


export default LoginPage;