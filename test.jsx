import React from 'react';
import ReactDOM from 'react-dom';

class TestElement extends React.Component {
  render() {
    return (
      <div>
        hello, world.
      </div>
    );
  }
}

ReactDOM.render(<TestElement />, document.getElementById('app'));
