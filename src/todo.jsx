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


export default class Todo extends React.Component{
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
              <TodoComponent key={todo.id} todo={todo}/>
            )}
          </TableBody>
        </Table>
      </div>
    );
  }
}

class TodoComponent extends React.Component{
  dateFormatting(targetTime){
	return targetTime.toLocaleString();
  }

  remainingTime(targetTime){
    var time = targetTime.getTime() - new Date().getTime();
    var minutes = parseInt(time/60000);
    var hours = parseInt(minutes/60);
    var days = parseInt(hours/24);
    if(days > 1) return this.dateFormatting(targetTime);
	// returning
	days = Math.abs(days);
	hours = Math.abs(hours%24);
	minutes = Math.abs(minutes%60);
	var ret = "";
	if(time < 0) ret += "Over ";
	if(days) ret += String(days) + " days ";
	if(hours) ret += String(hours) + " hours ";
	if(minutes) ret += String(minutes) + " minutes ";
	return ret;
  }

  timeUpdate() {
    this.setState({timeString: this.remainingTime(new Date(this.props.todo.deadline))});
  }
  componentWillMount() {
    this.timeUpdate();
    let interval = setInterval(this.timeUpdate.bind(this), 1000);
    this.setState({interval, interval});
  }
  componentWillUnmount() {
    clearInterval(this.state.interval);
  }
  render() {
    return(
      <TableRow>
		  {this.props.children[0]}
        <TableRowColumn>{this.props.todo.title}</TableRowColumn>
        <TableRowColumn>{this.state.timeString}</TableRowColumn>
      </TableRow>
    );
  }
}
