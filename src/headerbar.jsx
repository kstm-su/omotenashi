import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';

export default class HeaderBar extends React.Component {
  componentWillMount() {
    this.setState({
      title: '',
    });
  }

  render() {
    return <AppBar title={this.state.title} />;
  }
}
