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
                return subject.schedules.some(s => s.period === i);
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
          >
            {this.props.subjects.map(subject => {
              subject.s = subject.schedules.filter(s => {
                return s.week === i && s.period === this.props.index;
              });
              return subject;
            }).filter(s => s.s.length).map((subject, j, subjects) => {
              let len = this.props.maxLength;
              let width = innerWidth * 0.93 / this.props.weeks.length / len;
              let height = this.state.height / subjects.length;
              return (
                <div
                  key={j}
                  className="timetable-subject"
                  style={{
                    height: height,
                    fontSize: Math.min(width, height / 3) | 0,
                  }}
                >
                  {subject.label}
                  <small>{subject.s.pop().location}</small>
                </div>
              );
            })}
          </TimeTableCell>
        ))}
      </TableRow>
    );
  }
}

class TimeTableCell extends React.Component {
  render() {
    return (
      <TableRowColumn style={{height: this.props.height}}>
        {this.props.children}
      </TableRowColumn>
    );
  }
}
