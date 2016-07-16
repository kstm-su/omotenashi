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

import userData from './testdata.js';

class Color {
  constructor(hue) {
    this.hue = hue;
  }

  hsl(saturation, lightness) {
    return `hsl(${this.hue}, ${saturation * 100}%, ${lightness * 100}%)`;
  }

  gradient(angle, ...stops) {
    return `linear-gradient(${angle}, ${stops.map(stop => {
      return this.hsl(...stop);
    })})`;
  }

  shadow(x, y, blur, spread, saturation, lightness, inset) {
    let color = this.hsl(saturation, lightness);
    return `${[x, y, blur, spread].map(length => {
      let n = +length;
      if (isNaN(n)) {
        return length;
      }
      return n + 'px';
    }).join(' ')} ${color}${inset ? ' inset' : ''}`;
  }
}

export default class TimeTable extends React.Component {
  componentWillMount() {
    this.setState({
      subjects: userData.subjects.map((subject, i, subjects) => {
        if (subject.color == null) {
          subject.color = new Color(i * 360 / subjects.length | 0);
        }
        return subject;
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
            {this.props.subjects.map(subject => {
              subject.s = subject.schedules.filter(s => {
                return s.week === i && s.period === this.props.index;
              });
              return subject;
            }).filter(s => s.s.length).map((subject, j, subjects) => {
              let len = this.props.maxLength;
              let width = innerWidth * 0.93 / this.props.weeks.length | 0;
              let height = this.state.height / subjects.length | 0;
              let aspect = width / len / height;
              let display = 'table-row';
              let color = subject.color;
              if (aspect > 0.7) {
                display = 'table-cell';
                width /= subjects.length;
                height = this.state.height;
              }
              return (
                <div key={j} style={{display}}>
                  <FlatButton
                    className="timetable-subject"
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
                    {subject.label}
                    <small>{subject.s.pop().location}</small>
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
