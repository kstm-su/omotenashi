import React from 'react';
import {Router, Route, IndexRoute, hashHistory} from 'react-router';

import Main from './';
import TimeTable from '../timetable';
import EventList from '../eventlist';
import Course from '../course';

export default class AppRouter extends React.Component {
  render() {
    return (
      <Router history={hashHistory}>
        <Route path="/" component={Main}>
          <IndexRoute
            component={TimeTable}
            title="時間割"
            closeButton={false}
          />
          <Route path="events" component={EventList} title="イベント一覧" />
          <Route path="course/:id" component={Course} title="授業ページ" />
        </Route>
      </Router>
    );
  }
}
