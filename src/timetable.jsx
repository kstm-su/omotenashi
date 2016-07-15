import React from 'react';
import {
  Table,
  TableBody,
  TableHeader,
  TableHeaderColumn,
  TableRow,
  TableRowColumn
} from 'material-ui/Table';

import userData from './testdata.js';

export default class TimeTable extends React.Component {
  componentWillMount() {
    this.setState({
      subjects: userData.subjects,
      weeks: userData.weeks,
      periods: userData.periods,
    });
  }

  render() {
    return (
      <Table className="timetable">
        <TableHeader displaySelectAll={false} adjustForCheckbox={false}>
          <TableRow>
            <TableHeaderColumn></TableHeaderColumn>
            {this.state.weeks.map((week, i) => (
              <TableHeaderColumn key={i}>
                {week}
              </TableHeaderColumn>
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
              subjects={this.state.subjects.filter(subject => {
                return subject.schedules.some(schedule => schedule[1] === i);
              })}
              maxLength={this.state.subjects.reduce((max, subject) => {
                return Math.max(max, subject.label.length);
              }, 1)}
            />
          ))} 
        </TableBody>
      </Table>
    );
  }
}

class TimeTableRow extends React.Component {
  componentWillMount() {
    this.updateHeight();
  }

  componentDidMount() {
    window.addEventListener('resize', this.updateHeight.bind(this));
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.updateHeight.bind(this));
  }

  updateHeight() {
    let h = window.innerHeight - 123;
    let n = this.props.periods.length;
    this.setState({height: h / n});
  }

  render() {
    return (
      <TableRow style={{height: this.state.height}}>
        <TableHeaderColumn style={{height: this.state.height}}>
          {this.props.period}
        </TableHeaderColumn>
        {this.props.weeks.map((week, i) => (
          <TimeTableCell
            key={i}
            weeks={this.props.weeks}
            height={this.state.height}
            maxLength={this.props.maxLength}
          >
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

class TimeTableCell extends React.Component {
  get fontSize() {
    let len = this.props.maxLength;
    let width = innerWidth * 0.93 / this.props.weeks.length / len;
    let height = this.props.height;
    return Math.min(width, height) | 0;
  }

  render() {
    return (
      <TableRowColumn style={{height: this.props.height, fontSize: this.fontSize}}>
        {this.props.children}
      </TableRowColumn>
    );
  }
}
