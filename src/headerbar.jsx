import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';

export default class HeaderBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {title: ''};
  }

  render() {
    return <AppBar title={this.state.title} />;
  }
}
