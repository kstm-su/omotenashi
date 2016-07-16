import React from 'react';
import Dialog from 'material-ui/Dialog';
import TextField from 'material-ui/TextField';
import FlatButton from 'material-ui/FlatButton';

export default class LoginForm extends React.Component {
  render() {
    const actions = [
      <FlatButton
        label="キャンセル"
        primary={true}
        onTouchTap={this.props.close}
      />,
      <FlatButton
        label="ログイン"
        primary={true}
        onTouchTap={this.props.close}
      />,
    ];
    return (
      <Dialog
        title="ログイン"
        open={this.props.enable}
        actions={actions}
        onRequestClose={open => this.props[open ? 'open' : 'close']()}
        contentStyle={{maxWidth: 500}}
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
