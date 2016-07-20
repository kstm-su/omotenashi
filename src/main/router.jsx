import React from 'react';
import {Router, Route, IndexRoute, hashHistory} from 'react-router';

import Main from './main';
import TimeTable from '../timetable';
import EventList from '../eventlist';
import Course from '../course';
import LoginForm from '../loginform';

export default class AppRouter extends React.Component {
  render() {
    return (
      <Router history={hashHistory}>
        <Route path="/" component={Main}>
          <IndexRoute component={TimeTable} />
          <Route path="events" component={EventList} />
          <Route path="course/:id" component={Course} />
          <Route path="login" component={LoginForm} />
        </Route>
      </Router>
    );
  }
}
