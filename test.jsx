import React from 'react';
import ReactDOM from 'react-dom';
import injectTapEventPlugin from 'react-tap-event-plugin';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';

class TestElement extends React.Component {
  render() {
    return (
      <div>
        hello, world.
      </div>
    );
  }
}

class TitleBar extends React.Component {
  onLeftButtonTouchTap() {
    console.log(0);
  }

  render() {
    return (
      <AppBar title="2016年度 前期" onLeftIconButtonTouchTap={this.onLeftButtonTouchTap} />
    );
  }
}

const TestApp = () => (
  <MuiThemeProvider>
    <TitleBar />
  </MuiThemeProvider>
);

injectTapEventPlugin();
ReactDOM.render(<TestApp />, document.getElementById('app'));
