import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import NavigationClose from 'material-ui/svg-icons/navigation/close';

export default class HeaderBar extends React.Component {
  closePage(e) {
    window.location.href = '#';
  }

  render() {
    return (
      <AppBar
        title={this.props.title}
        iconElementRight={<CloseButton />}
        onLeftIconButtonTouchTap={this.props.openMainMenu}
        className="headerbar"
      />
    );
  }
}

class CloseButton extends React.Component {
  click() {
    location.href = '#';
  }

  render() {
    return (
      <IconButton iconStyle={{color: 'white'}} onTouchTap={this.click}>
        <NavigationClose />
      </IconButton>
    );
  }
}
