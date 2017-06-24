import React from 'react';
import AppBar from 'material-ui/AppBar';
import './appBar.css'

class appBar  extends React.Component{
  render () {
    return (
      <div className="app-bar">
        <AppBar title="Title" onLeftIconButtonTouchTap={() => this.props.handleToggle()} />
      </div>
    )
  }
}
 
export default appBar;