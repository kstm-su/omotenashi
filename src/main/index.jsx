import React from 'react';
import ReactDOM from 'react-dom';
import injectTapEventPlugin from 'react-tap-event-plugin';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import AppRouter from './router';
import Header from './header';
import MainMenu from './menu';
import LoginForm from '../loginform';

class App extends React.Component {
  render() {
    return <AppRouter />;
  }
}

export default class Main extends React.Component {
  componentWillMount() {
    this.closeMainMenu();
  }

  openMainMenu() {
    this.setState({mainMenu: true});
  }

  closeMainMenu() {
    this.setState({mainMenu: false});
  }

  render() {
    let children = this.props.children;
    let title = children.type.title || '';
    let dialog = children.type.dialog || false;
    let closable = children.type.closable || true;
    if (typeof title === 'function') {
      title = title(this.props.params);
    }
    if (typeof dialog === 'function') {
      dialog = dialog(this.props.params);
    }
    if (typeof closable === 'function') {
      closable = closable(this.props.params);
    }
    return (
      <MuiThemeProvider>
        <div>
          <Header
            title={title}
            dialog={dialog}
            closable={closable}
            openMainMenu={this.openMainMenu.bind(this)}
          />
          <MainMenu
            enable={this.state.mainMenu}
            open={this.openMainMenu.bind(this)}
            close={this.closeMainMenu.bind(this)}
          />
          <MainContainer>{children}</MainContainer>
        </div>
      </MuiThemeProvider>
    );
  }
}

class MainContainer extends React.Component {
  render() {
    const style = {
      position: 'absolute',
      bottom: 0,
      right: 0,
    };
    return <main style={style}>{this.props.children}</main>;
  }
}

injectTapEventPlugin();
ReactDOM.render(<App />, document.getElementById('app'));
