import React from 'react';
import {hashHistory} from 'react-router';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import NavigationClose from 'material-ui/svg-icons/navigation/close';

export default class Header extends React.Component {
  closePage(e) {
    hashHistory.goBack();
  }

  render() {
    let style = {
      position: 'fixed',
      top: 0,
      textAlign: 'center',
    };
    let leftIconStyle = {};
    if (this.props.dialog) {
      style.height = '100%';
      leftIconStyle.display = 'none';
    }
    let closable = !this.props.dialog && this.props.closable;
    return (
      <AppBar
        title={this.props.title}
        iconElementRight={closable ? <CloseButton /> : null}
        onLeftIconButtonTouchTap={this.props.openMainMenu}
        style={style}
        iconStyleLeft={leftIconStyle}
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
