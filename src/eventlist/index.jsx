import React from 'react';
import {
  Table,
  TableBody,
  TableHeader,
  TableHeaderColumn,
  TableRow,
  TableRowColumn
} from 'material-ui/Table';
import { connect } from 'react-redux';

import userData from '../testdata';
import EventComponent from '../oneevent/oneevent_oneline.jsx';

@connect()
export default class EventList extends React.Component {

  //FIXME: userDataを使っている
  getEventData() {
	console.log(this.props);
    if (!this.props.event) {
		this.props.dispatch({type: 'eventlist'});
	}
    this.setState({events: this.props.event || userData.events});
  }

  componentWillMount() {
    this.getEventData();
  }

  render() {
    return(
      <div>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHeaderColumn>title</TableHeaderColumn>
              <TableHeaderColumn>starting time</TableHeaderColumn>
              <TableHeaderColumn>deadline</TableHeaderColumn>
            </TableRow>
          </TableHeader>
          <TableBody>
            {this.state.events.map(event => <EventComponent key={event.id} event={event} />)}
          </TableBody>
        </Table>
      </div>
    );
  }
}

