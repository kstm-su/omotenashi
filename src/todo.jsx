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

function dateFormatting(targetTime){
	return targetTime.toLocaleString();
}

function remainingTime(targetTime){
	var time = targetTime.getTime() - new Date().getTime();
	var minutes = parseInt(time/60000);
	var hours = parseInt(minutes/60);
	var days = parseInt(hours/24);
	if(days > 1) return dateFormatting(targetTime);
	return (days?String(days) + " days ":" ") + (hours%24?String(hours%24) + " hours ":" ") + (minutes%60?String(minutes%60) + " mintues ":" ") 
}

export default class Todo extends React.Component{
  //FIXME: userDataを使っている
  getTodoData() {
    for(var key in userData.todo){
		userData.todo[key].deadlineString = remainingTime(new Date(userData.todo[key].deadline))
	}
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
                <TableRowColumn>{todo.deadlineString}</TableRowColumn>
              </TableRow>
              )}
            </TableBody>
          </Table>
        </div>
    );
  }
}
