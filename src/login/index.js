import React from 'react';
import {
  Link
} from 'react-router-dom'

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import RaisedButton from 'material-ui/RaisedButton';

const LoginPage = () => (
    <MuiThemeProvider>
      <Link to="/bookList"><RaisedButton label="Login" /></Link>
    </MuiThemeProvider>
);

 
export default LoginPage;