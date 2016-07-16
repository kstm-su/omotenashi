import React from 'react';
import Drawer from 'material-ui/Drawer';
import {Menu, MenuItem} from 'material-ui/Menu';
import Divider from 'material-ui/Divider';
import {
  ActionAccountCircle,
  ActionDateRange,
  ActionAssignment,
} from 'material-ui/svg-icons';

export default class MainMenu extends React.Component {
  render() {
    return (
      <Drawer
        docked={false}
        open={this.props.enable}
        onRequestChange={open => this.props[open ? 'open' : 'close']()}
      >
        <Menu>
          <MenuItem
            leftIcon={<ActionAccountCircle />}
            onTouchTap={this.props.openLoginForm}
          >
            ログイン
          </MenuItem>
          <Divider />
          <MenuItem
            href="#"
            leftIcon={<ActionDateRange />}
            onTouchTap={this.props.close}
          >
            時間割
          </MenuItem>
          <MenuItem
            href="#events"
            leftIcon={<ActionAssignment />}
            onTouchTap={this.props.close}
          >
            イベント一覧
          </MenuItem>
        </Menu>
      </Drawer>
    );
  }
}
