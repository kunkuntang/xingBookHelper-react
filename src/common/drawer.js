import React, { Component } from 'react';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import RaisedButton from 'material-ui/RaisedButton';

/*const DrawerPanel = (props) => {
  let  handleClose = () => this.setState({open: false})
  let  handleToggle = () => this.setState({open: !this.props.state.open});

    return (

    <div>
    <RaisedButton
        label="Open Drawer"
        onTouchTap={handleToggle}
    />
    <Drawer
        docked={false}
        width={200}
        open={true}
        onRequestChange={(open) => this.setState({open})}
    >
        <MenuItem onTouchTap={handleClose(this)}>Menu Item</MenuItem>
    </Drawer>
    </div>
)
}

export default DrawerPanel;*/

export default class DrawerPanel extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <Drawer
          docked={false}
          width={200}
          open={this.props.isOpen}
          onRequestChange={(open) => this.props.handleToggle()}
        >
          <MenuItem onTouchTap={this.props.handleToggle}>Menu Item</MenuItem>
          <MenuItem onTouchTap={this.props.handleClose}>Menu Item 2</MenuItem>
        </Drawer>
      </div>
    );
  }
}