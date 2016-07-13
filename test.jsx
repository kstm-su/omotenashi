import React from 'react';
import ReactDOM from 'react-dom';
import injectTapEventPlugin from 'react-tap-event-plugin';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import {
  Table,
  TableBody,
  TableHeader,
  TableHeaderColumn,
  TableRow,
  TableRowColumn
} from 'material-ui/Table';

const userData = {
  weeks: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'],
  periods: [1, 2, 3, 4],
  subjects: [
    {
      title: 'コンピュータデバイス',
      print: 'コンデバ',
      schedules: [[0, 0], [1, 3]],
    }, {
      title: '画像処理',
      print: '画像処理',
      schedules: [[0, 1], [1, 1]],
    }, {
      title: 'ヒューマンコンピュータインタラクション',
      print: 'HCI',
      schedules: [[0, 2], [0, 3]],
    }, {
      title: 'プログラミング言語論',
      print: 'プロ言論',
      schedules: [[2, 3], [3, 0]],
    }, {
      title: '論理回路Ⅱ',
      print: '論理回路Ⅱ',
      schedules: [[3, 1], [4, 3]],
    }
  ],
};

class TitleBar extends React.Component {
  leftButtonTouchTap() {
    console.log('TODO: show menu');
  }

  render() {
    return (
      <AppBar
        title="2016年度 前期"
        onLeftIconButtonTouchTap={this.leftButtonTouchTap}
        style={{position: 'fixed', top: 0}}
      />
    );
  }
}

class TimeTable extends React.Component {
  render() {
    return (
      <Table>
        <TableHeader displaySelectAll={false} adjustForCheckbox={false}>
          <TableRow>
            <TableHeaderColumn style={{width: 16}}></TableHeaderColumn>
            {this.props.weeks.map((week, i) => (
              <TableHeaderColumn key={i} style={{
                borderLeft: '1px solid rgb(224, 224, 224)',
                textAlign: 'center',
              }}>
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
  render() {
    return (
      <TableRow style={{height: (window.innerHeight - 123) / this.props.periods.length | 0}}>
        <TableHeaderColumn style={{width: 16, textAlign: 'center'}}>
          {this.props.period}
        </TableHeaderColumn>
        {this.props.weeks.map((week, i) => (
          <TimeTableCell key={i}>
            {this.props.subjects.filter(subject => {
              return subject.schedules.some(schedule => {
                return schedule[0] === i && schedule[1] === this.props.index;
              });
            }).map(subject => subject.print).join()}
          </TimeTableCell>
        ))}
      </TableRow>
    );
  }
}

class TimeTableCell extends React.Component{
  render() {
    return (
      <TableRowColumn style={{
        borderLeft: '1px solid rgb(224, 224, 224)',
        textAlign: 'center',
      }}>
        {this.props.children}
      </TableRowColumn>
    );
  }
}

const TestApp = () => (
  <MuiThemeProvider>
    <div style={{position:'absolute', height: '100%'}}>
      <TitleBar />
      <div style={{marginTop: 64}}>
        <TimeTable
          subjects={userData.subjects}
          weeks={userData.weeks}
          periods={userData.periods}
        />
      </div>
    </div>
  </MuiThemeProvider>
);

injectTapEventPlugin();
ReactDOM.render(<TestApp />, document.getElementById('app'));
