import React from 'react';
import ReactDOM from 'react-dom';
import injectTapEventPlugin from 'react-tap-event-plugin';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { Router, Route, IndexRoute, Link, hashHistory } from 'react-router';

import HeaderBar from './headerbar.jsx';
import MainMenu from './mainmenu.jsx';
import TimeTable from './timetable.jsx';
import Todo from './todo.jsx';

//TODO: こんな上の方でsubjectsとかweeksとかもつのおかしない？
class Main extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      showMainMenu: false,
    };
  }

  openMainMenu() {
    this.setState({showMainMenu: true});
  }

  closeMainMenu() {
    this.setState({showMainMenu: false});
  }

  render() {
    return (
      <div>
        <HeaderBar title="" openMainMenu={this.openMainMenu.bind(this)} />
        <MainMenu
          show={this.state.showMainMenu}
          open={this.openMainMenu.bind(this)}
          close={this.closeMainMenu.bind(this)}
        />
        <div className="container">
          {this.props.children && React.cloneElement(this.props.children)}
        </div>
      </div>
    );
  }
}

const TestApp = () => (
  <MuiThemeProvider>
    <div>
      <Router history={hashHistory}>
        <Route path="/" component={Main}>
          <IndexRoute component={TimeTable} />
          <Route path="todo" component={Todo}/>
        </Route>
      </Router>
    </div>
  </MuiThemeProvider>
);

injectTapEventPlugin();
ReactDOM.render(<TestApp />, document.getElementById('app'));
