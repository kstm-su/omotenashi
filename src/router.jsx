import React from 'react';
import {Router, Route, IndexRoute, Link, hashHistory} from 'react-router';

import {Main} from './main.jsx';
import TimeTable from './timetable.jsx';
import Todo from './todo.jsx';

export default class AppRouter extends React.Component {
  render() {
    return (
      <Router history={hashHistory}>
        <Route path="/" component={Main}>
          <IndexRoute component={TimeTable} />
          <Route path="todo" component={Todo} />
        </Route>
      </Router>
    );
  }
}
