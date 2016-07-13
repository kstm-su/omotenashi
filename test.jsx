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
  todo: [
    {
      id: 1,
    title: '課題1',
    deadline: '2016-07-15T00:00:00.000Z',
  }, {
      id: 2,
    title: '課題2',
    deadline: '2016-07-18T00:00:00.000Z',
  }, {
      id: 3,
    title: '課題3',
    deadline: '2016-07-120T00:00:00.000Z',
  },
  ],
};

class TitleBar extends React.Component {
  onLeftButtonTouchTap() {
    console.log('TODO: show menu');
  }

  render() {
    return (
      <AppBar
        title="2016年度 前期"
        onLeftIconButtonTouchTap={this.onLeftButtonTouchTap}
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
    console.log(this.props.subjects);
    return (
      <TableRow>
        <TableRowColumn>{this.props.period}</TableRowColumn>
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
      <TableRowColumn>
        {this.props.children}
      </TableRowColumn>
    );
  }
}

class Todo extends React.Component{
//FIXME: userDataを使っている
  getTodoData() {
    this.setState({todoList: userData.todo});
  }
  componentWillMount() {
  this.getTodoData();
  }
  render() {
    return(
     <div>
       <Table>
         <TableHeader>
           <TableRow>
             <TableHeaderColumn>title</TableHeaderColumn>
             <TableHeaderColumn>deadline</TableHeaderColumn>
           </TableRow>
         </TableHeader>
         <TableBody>
         {this.state.todoList.map((todo) =>
           <TableRow key={todo.id}>
             <TableRowColumn>{todo.title}</TableRowColumn>
             <TableRowColumn>{todo.deadline}</TableRowColumn>
           </TableRow>
       )}
         </TableBody>
      </Table>
    </div>
  );
  }
}

class TodoComponent extends React.Component{
  render() {
    return(
      <TableRow>
        <TableRowColumn>{this.props.todo.title}</TableRowColumn>
        <TableRowColumn>{this.props.todo.deadline}</TableRowColumn>
      </TableRow>
    );
  }
}

//TODO: こんな上の方でsubjectsとかweeksとかもつのおかしない？
class Main extends React.Component{
  render() {
    return (
    <div>
      <TitleBar />
    {this.props.children && React.cloneElement(this.props.children, {
        subjects: userData.subjects,
        weeks: userData.weeks,
        periods: userData.periods,
    })}
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
