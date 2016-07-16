import React from 'react';
import {Router, Route, IndexRoute, Link, hashHistory} from 'react-router';

import {Main} from './main.jsx';
import TimeTable from './../timetable/timetable.jsx';
import Todo from './../eventlist/eventlist.jsx';

export default class AppRouter extends React.Component {
  render() {
    return (
      <Router history={hashHistory}>
        <Route path="/" component={Main}>
          <IndexRoute component={TimeTable} title="時間割" closeButton={false} />
          <Route path="todo" component={Todo} title="イベント一覧" />
        </Route>
      </Router>
    );
  }
}
