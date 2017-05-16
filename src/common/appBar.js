import React from 'react';
import AppBar from 'material-ui/AppBar';

class appBar  extends React.Component{
  render () {
    return (
      <AppBar title="Title" onLeftIconButtonTouchTap={() => this.props.handleToggle()} />
    )
  }
}
 
export default appBar;