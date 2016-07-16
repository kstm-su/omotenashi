import React from 'react';
import {
  Table,
  TableBody,
  TableHeader,
  TableHeaderColumn,
  TableRow,
  TableRowColumn
} from 'material-ui/Table';
import FlatButton from 'material-ui/FlatButton';

import {Hue} from './color';

import userData from './testdata';

export default class TimeTable extends React.Component {
  componentWillMount() {
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

  render() {
    return (
      <Table className="timetable">
        <TableHeader displaySelectAll={false} adjustForCheckbox={false}>
          <TableRow displayBorder={false}>
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
              courses={this.state.courses.filter(course => {
                return course.schedules.some(s => s.period === i);
              })}
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
    let h = window.innerHeight * 0.93 - 64;
    let n = this.props.periods.length;
    this.setState({height: h / n});
  }

  render() {
    return (
      <TableRow displayBorder={false} style={{height: this.state.height}}>
        <TableHeaderColumn style={{height: this.state.height}}>
          {this.props.period}
        </TableHeaderColumn>
        {this.props.weeks.map((week, i) => (
          <TimeTableCell
            key={i}
            weeks={this.props.weeks}
            height={this.state.height}
          >
            {this.props.courses.map(course => {
              course.s = course.schedules.filter(s => {
                return s.week === i && s.period === this.props.index;
              });
              return course;
            }).filter(s => s.s.length).map((course, j, courses) => {
              let len = this.props.maxLength;
              let width = innerWidth * 0.93 / this.props.weeks.length | 0;
              let height = this.state.height / courses.length | 0;
              let aspect = width / len / height;
              let display = 'table-row';
              let color = course.color;
              if (aspect > 0.7) {
                display = 'table-cell';
                width /= courses.length;
                height = this.state.height;
              }
              return (
                <div key={j} style={{display}}>
                  <FlatButton
                    className="timetable-course"
                    style={{
                      width,
                      height,
                      fontSize: Math.min(width / len, height * 0.3) | 0,
                      backgroundColor: color.hsl(1, 0.5),
                      backgroundImage: color.gradient(
                        'to right',
                        [0.9, 0.7],
                        [0.9, 0.75]
                      ),
                      boxShadow: color.shadow(0, 0, 0, 1, 1, 0.4, true),
                    }}
                  >
                    {course.label}
                    <small>{course.s.pop().location}</small>
                  </FlatButton>
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
