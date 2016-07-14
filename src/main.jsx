import React from 'react';
import ReactDOM from 'react-dom';
import injectTapEventPlugin from 'react-tap-event-plugin';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import AppRouter from './router.jsx';
import HeaderBar from './headerbar.jsx';
import MainMenu from './mainmenu.jsx';

class App extends React.Component {
  render() {
    return <AppRouter />;
  }
}

export class Main extends React.Component {
  componentWillMount() {
    this.closeMainMenu();
  }

  openMainMenu() {
    this.setState({showMainMenu: true});
  }

  closeMainMenu() {
    this.setState({showMainMenu: false});
  }

  render() {
    return (
      <MuiThemeProvider>
        <div>
          <HeaderBar
            title={this.props.children.title}
            openMainMenu={this.openMainMenu.bind(this)}
          />
          <MainMenu
            show={this.state.showMainMenu}
            open={this.openMainMenu.bind(this)}
            close={this.closeMainMenu.bind(this)}
          />
          <main>{this.props.children}</main>
        </div>
      </MuiThemeProvider>
    );
  }
}

injectTapEventPlugin();
ReactDOM.render(<App />, document.getElementById('app'));
