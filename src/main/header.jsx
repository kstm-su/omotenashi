import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import NavigationClose from 'material-ui/svg-icons/navigation/close';

export default class Header extends React.Component {
  closePage(e) {
    history.back();
  }

  render() {
    const style = {
      position: 'fixed',
      top: 0,
      textAlign: 'center',
    };
    return (
      <AppBar
        title={this.props.title}
        iconElementRight={this.props.closeButton ? <CloseButton /> : null}
        onLeftIconButtonTouchTap={this.props.openMainMenu}
        style={style}
      />
    );
  }
}

class CloseButton extends React.Component {
  click() {
    history.back();
  }

  render() {
    return (
      <IconButton iconStyle={{color: 'white'}} onTouchTap={this.click}>
        <NavigationClose />
      </IconButton>
    );
  }
}
