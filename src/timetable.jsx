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

class TimeTableCell extends React.Component {
  render() {
    return <TableRowColumn>{this.props.children}</TableRowColumn>;
  }
}
