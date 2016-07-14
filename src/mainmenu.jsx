import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';

export default class MainMenu extends React.Component {
  render() {
    return (
      <Drawer
        docked={false}
        open={this.props.show}
        onRequestChange={show => this.props[show ? 'open' : 'close']()}
      >
        <a href="#todo"><MenuItem>Todo</MenuItem></a>
      </Drawer>
    );
  }
}
