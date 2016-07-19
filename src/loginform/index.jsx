import React from 'react';
import {hashHistory} from 'react-router';
import Dialog from 'material-ui/Dialog';
import TextField from 'material-ui/TextField';
import FlatButton from 'material-ui/FlatButton';

export default class LoginForm extends React.Component {
  static get dialog() {
    return true;
  }

  componentWillMount() {
    this.setState({open: true});
  }

  close() {
    this.setState({open: false});
  }

  login() {
    this.close();
    hashHistory.push('/');
  }

  cancel() {
    this.close();
    hashHistory.goBack();
  }

  render() {
    const actions = [
      <FlatButton
        label="キャンセル"
        primary={true}
        onTouchTap={this.cancel.bind(this)}
      />,
      <FlatButton
        label="ログイン"
        primary={true}
        onTouchTap={this.login.bind(this)}
      />,
    ];
    return (
      <Dialog
        open={this.state.open}
        actions={actions}
        modal={true}
        autoScrollBodyContent={true}
        onRequestClose={open => this.setState({open})}
        contentStyle={{maxWidth: 500}}
        actionsContainerStyle={{borderTop: 0}}
        overlayStyle={{background: 'transparent'}}
      >
        <TextField
          floatingLabelText="ログインID"
          style={{
            display: 'block',
            width: '100%',
          }}
        />
        <TextField
          floatingLabelText="パスワード"
          type="password"
          style={{
            display: 'block',
            width: '100%',
          }}
        />
      </Dialog>
    );
  }
}
