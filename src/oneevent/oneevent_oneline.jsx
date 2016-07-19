import React from 'react';
import {
  Table,
  TableBody,
  TableHeader,
  TableHeaderColumn,
  TableRow,
  TableRowColumn
} from 'material-ui/Table';

export default class oneevent_oneline extends React.Component {
  dateFormatting(targetTime) {
    return targetTime.toLocaleString();
  }

  remainingTime(targetTime) {
    var time = targetTime.getTime() - new Date().getTime();
    var minutes = parseInt(time / 60000);
    var hours = parseInt(minutes / 60);
    var days = parseInt(hours / 24);
    if (days > 1) {
      return this.dateFormatting(targetTime);
    }
    // returning
    days = Math.abs(days);
    hours = Math.abs(hours % 24);
    minutes = Math.abs(minutes % 60);
    var ret = '';
    if (time < 0) {
      ret += 'Over ';
    }
    if (days) {
      ret += String(days) + ' days ';
    }
    if (hours) {
      ret += String(hours) + ' hours ';
    }
    if (minutes) {
      ret += String(minutes) + ' minutes ';
    }
    return ret;
  }

  timeUpdate() {
    let timeString = this.remainingTime(new Date(this.props.event.deadline));
    this.setState({timeString});
  }

  componentWillMount() {
    this.timeUpdate();
    let interval = setInterval(this.timeUpdate.bind(this), 1000);
    this.setState({interval});
  }
  componentWillUnmount() {
    clearInterval(this.state.interval);
  }

  render() {
    return(
      <TableRow>
        {this.props.children}
        <TableRowColumn>{this.props.event.title}</TableRowColumn>
		<TableRowColumn>{this.props.event.startingtime}</TableRowColumn>
        <TableRowColumn>{this.state.timeString}</TableRowColumn>
      </TableRow>
    );
  }
}
