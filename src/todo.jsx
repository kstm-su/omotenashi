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
