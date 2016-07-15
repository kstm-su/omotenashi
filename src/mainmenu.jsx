import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import DateRange from 'material-ui/svg-icons/action/date-range.js';
import Assignment from 'material-ui/svg-icons/action/assignment.js';

export default class MainMenu extends React.Component {
  render() {
    return (
      <Drawer
        docked={false}
        open={this.props.show}
        onRequestChange={show => this.props[show ? 'open' : 'close']()}
      >
        <MenuItem href="#" leftIcon={<DateRange />} onTouchTap={this.props.close}>時間割</MenuItem>
        <MenuItem href="#todo" leftIcon={<Assignment />} onTouchTap={this.props.close}>イベント一覧</MenuItem>
      </Drawer>
    );
  }
}
