import React from 'react';
import {
  Table,
  TableBody,
  TableHeader,
  TableHeaderColumn,
  TableRow,
  TableRowColumn
} from 'material-ui/Table';
import { connect } from 'react-redux';

import TimeTableCourse from './course';
import {Hue} from '../utils/color';

import userData from '../testdata';

@connect()
export default class TimeTable extends React.Component {
  componentWillMount() {
    this.loadUserData();
    this.updateWindowSize();
	this.props.dispatch({type: 'timetable'});
  }

  componentDidMount() {
    this.onresize = this.updateWindowSize.bind(this);
    addEventListener('resize', this.onresize);
  }

  componentWillUnmount() {
    removeEventListener('resize', this.onresize);
  }

  loadUserData() {
    this.setState({
      courses: userData.courses.map((course, i, courses) => {
        if (course.color == null) {
          course.color = new Hue(i * 360 / courses.length | 0);
        }
        return course;
      }),
      weeks: userData.weeks,
      periods: userData.periods,
    });
  }

  updateWindowSize() {
    this.setState({
      windowWidth: innerWidth,
      windowHeight: innerHeight,
    });
  }

  static title(params) {
    return '時間割';
  }

  static closable(params) {
    return false;
  }

  render() {
    let width = this.state.windowWidth * 0.93;
    let height = this.state.windowHeight * 0.93 - 64;
    return (
      <Table className="timetable">
        <TableHeader displaySelectAll={false} adjustForCheckbox={false} style={{border: 'none'}}>
          <TableRow
            displayBorder={false}
            style={{height: this.state.windowHeight * 0.07}}
          >
            <TimeTablePeriodHeader />
            {this.state.weeks.map((week, i) => (
              <TimeTableWeekHeader key={i}>
                {week}
              </TimeTableWeekHeader>
            ))}
          </TableRow>
        </TableHeader>
        <TableBody>
          {this.state.periods.map((period, i) => (
            <TimeTableRow
              key={i}
              index={i}
              period={period}
              periods={this.state.periods}
              weeks={this.state.weeks}
              courses={this.state.courses.filter(course => {
                return course.schedules.some(s => s.period === i);
              })}
              width={width / this.state.weeks.length}
              height={height / this.state.periods.length}
              maxLength={this.state.courses.reduce((max, course) => {
                return Math.max(max, course.label.length);
              }, 1)}
            />
          ))} 
        </TableBody>
      </Table>
    );
  }
}

class TimeTableRow extends React.Component {
  render() {
    return (
      <TableRow displayBorder={false} style={{height: this.props.height}}>
        <TimeTablePeriodHeader>
          {this.props.period}
        </TimeTablePeriodHeader>
        {this.props.weeks.map((week, i) => (
          <TimeTableCell
            key={i}
            weeks={this.props.weeks}
            height={this.props.height}
          >
            {this.props.courses.map(course => {
              course.s = course.schedules.filter(s => {
                return s.week === i && s.period === this.props.index;
              });
              return course;
            }).filter(s => s.s.length).map((course, j, courses) => {
              course.schedule = course.s.pop();
              delete course.s;
              return <TimeTableCourse 
                courses={courses}
                index={j}
                key={j}
                width={this.props.width}
                height={this.props.height}
                maxLength={this.props.maxLength}
              />;
            })}
          </TimeTableCell>
        ))}
      </TableRow>
    );
  }
}

class TimeTableWeekHeader extends React.Component {
  render() {
    let style = {
      textAlign: 'center',
      boxShadow: '0 0 0 1px rgb(224, 224, 224) inset',
      padding: 0,
      textOverflow: 'clip',
      boxSizing: 'border-box',
      height: this.props.height,
    };
    return (
      <TableHeaderColumn style={style}>
        {this.props.children}
      </TableHeaderColumn>
    );
  }
}

class TimeTablePeriodHeader extends React.Component {
  render() {
    let style = {
      textAlign: 'center',
      boxShadow: '0 0 0 1px rgb(224, 224, 224) inset',
      padding: 0,
      textOverflow: 'clip',
      boxSizing: 'border-box',
      width: '7%',
      height: this.props.height,
    };
    return (
      <TableHeaderColumn style={style}>
        {this.props.children}
      </TableHeaderColumn>
    );
  }
}

class TimeTableCell extends React.Component {
  render() {
    let style = {
      textAlign: 'center',
      boxShadow: '0 0 0 1px rgb(224, 224, 224) inset',
      padding: 0,
      textOverflow: 'clip',
      boxSizing: 'border-box',
      height: this.props.height,
    };
    return (
      <TableRowColumn style={style}>
        {this.props.children}
      </TableRowColumn>
    );
  }
}
