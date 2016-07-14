import React from 'react';
import ReactDOM from 'react-dom';
import injectTapEventPlugin from 'react-tap-event-plugin';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import { Router, Route, IndexRoute, Link, hashHistory } from 'react-router';
import {
  Table,
  TableBody,
  TableHeader,
  TableHeaderColumn,
  TableRow,
  TableRowColumn
} from 'material-ui/Table';
import Todo from './todo.jsx';

import userData from './testdata.js';

class TitleBar extends React.Component {
  leftButtonTouchTap() {
    console.log('TODO: show menu');
  }

  render() {
    return (
      <AppBar
        title="2016年度 前期"
        onLeftIconButtonTouchTap={this.leftButtonTouchTap}
        className="titlebar"
      />
    );
  }
}

class TimeTable extends React.Component {
  render() {
    return (
      <Table className="timetable">
        <TableHeader displaySelectAll={false} adjustForCheckbox={false}>
          <TableRow>
            <TableHeaderColumn></TableHeaderColumn>
            {this.props.weeks.map((week, i) => (
              <TableHeaderColumn key={i}>
                {week}
              </TableHeaderColumn>
              ))}
            </TableRow>
          </TableHeader>
          <TableBody>
            {this.props.periods.map((period, i) => (
              <TimeTableRow
                key={i}
                index={i}
                period={period}
                periods={this.props.periods}
                weeks={this.props.weeks}
                subjects={this.props.subjects.filter(subject => {
                  return subject.schedules.some(schedule => schedule[1] === i);
                })}
              />
              ))} 
            </TableBody>
          </Table>
    );
  }
}

class TimeTableRow extends React.Component{
  componentWillMount() {
    this.updateHeight();
  }

  componentDidMount() {
    window.addEventListener('resize', this.updateHeight.bind(this));
  }

  updateHeight() {
    let h = window.innerHeight - 123;
    let n = this.props.periods.length;
    this.setState({height: h / n | 0});
  }

  render() {
    return (
      <TableRow style={{height: this.state.height}}>
        <TableHeaderColumn>
          {this.props.period}
        </TableHeaderColumn>
        {this.props.weeks.map((week, i) => (
          <TimeTableCell key={i}>
            {this.props.subjects.filter(subject => {
              return subject.schedules.some(schedule => {
                return schedule[0] === i && schedule[1] === this.props.index;
              });
            }).map(subject => subject.label).join()}
          </TimeTableCell>
          ))}
        </TableRow>
    );
  }
}

class TimeTableCell extends React.Component{
  render() {
    return (
      <TableRowColumn>
        {this.props.children}
      </TableRowColumn>
    );
  }
}

//TODO: こんな上の方でsubjectsとかweeksとかもつのおかしない？
class Main extends React.Component{
  render() {
    return (
      <div>
        <TitleBar />
        <div className="container">
          {this.props.children && React.cloneElement(this.props.children, {
            subjects: userData.subjects,
            weeks: userData.weeks,
            periods: userData.periods,
          })}
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
