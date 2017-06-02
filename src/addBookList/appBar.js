import React from 'react';
import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import NavigationBlack from 'material-ui/svg-icons/navigation/arrow-back';

import './appBar.css'

class appBar  extends React.Component{
  render () {
    return (
      <div className="app-bar">
        <AppBar 
          title="Title"
          iconElementLeft={<IconButton><NavigationBlack /></IconButton>}
          onLeftIconButtonTouchTap={() => window.history.go(-1)}
        />
      </div>
    )
  }
}
 
export default appBar;