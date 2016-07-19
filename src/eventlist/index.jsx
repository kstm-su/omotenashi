import React from 'react';
import {
  Table,
  TableBody,
  TableHeader,
  TableHeaderColumn,
  TableRow,
  TableRowColumn
} from 'material-ui/Table';

import userData from '../testdata';
import EventComponent from '../oneevent/oneevent_oneline.jsx';

export default class EventList extends React.Component {
  static get title() {
    return 'イベント一覧';
  }

  //FIXME: userDataを使っている
  getEventData() {
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
            {this.state.events.map(event => {
              return <EventComponent key={event.id} event={event} />;
            })}
          </TableBody>
        </Table>
      </div>
    );
  }
}

