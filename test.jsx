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

class TestElement extends React.Component {
  render() {
    return (
      <div>
        hello, world.
      </div>
    );
  }
}

class TitleBar extends React.Component {
  onLeftButtonTouchTap() {
    console.log(0);
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

class TimeTable extends React.Component{
  constructor(props){
    super(props);
	this.state = {
      showCheckboxes:false
    };
  }
  render() {
    return (
      <Table>
        <TableHeader
          displaySelectAll={this.state.showCheckboxes}
          adjustForCheckbox={this.state.showCheckboxes}
        >
          <TableRow>
            <TableHeaderColumn></TableHeaderColumn>
            <TableHeaderColumn>Mon</TableHeaderColumn>
            <TableHeaderColumn>Tue</TableHeaderColumn>
            <TableHeaderColumn>Wed</TableHeaderColumn>
            <TableHeaderColumn>Thu</TableHeaderColumn>
            <TableHeaderColumn>Fri</TableHeaderColumn>
          </TableRow>
        </TableHeader>
        <TableBody>
          {this.props.data.map((row,index) => (
            <TimeTableRow key={index} index={index} cells={row} />
          ))} 
        </TableBody>
      </Table>
	)
  }
}

class TimeTableRow extends React.Component{
  render() {
    return (
      <TableRow>
        <TableRowColumn>{this.props.index+1}</TableRowColumn>
        {this.props.cells.map((cell,index) => {
          return(<TimeTableCell key={index} value={cell} />)
        })}
      </TableRow>
    );
  }
}

class TimeTableCell extends React.Component{
  render() {
    return (
      <TableRowColumn>
        {this.props.value}
      </TableRowColumn>
    );
  }
}

var mySchedule = [
  ['' ,'', '', 'プログラミング言語論', 'ネットワークコンピューティング'],
  ['', '画像処理', 'ソフトウェア工学', '論理回路Ⅱ', 'ネットワークコンピューティング'],
  ['画像処理', 'HCI', 'ソフトウェア工学', '', '論理回路Ⅱ'],
  ['HCI', '', 'プログラミング言語論', '', ''],
  ['', '', '', '', ''],
];

const TestApp = () => (
  <MuiThemeProvider>
    <div>
      <TitleBar />
      <TimeTable data={mySchedule} />
    </div>
  </MuiThemeProvider>
);

injectTapEventPlugin();
ReactDOM.render(<TestApp />, document.getElementById('app'));
