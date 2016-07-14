import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';

class HeaderBar extends React.Component {
  componentWillMount() {
    this.setState({
      title: '',
    });
  }

  render() {
    return <AppBar title={this.state.title} />
  }
}

module.exports = HeaderBar;
