import React, {Component} from 'react'
import {render} from 'react-dom'
import 'console-json';

import KeyPress from '../../src/index';
import HandleKeyTriggers from './handleKeyTriggers';

class Demo extends Component {

  state = {key: ''};

  setKey = event => this.setState({key: event.key});

  render() {
    const {
      key
    } = this.state;

    return (
        <div>
          <h1>react-short-keys Demo Yo!</h1>
          <KeyPress
              onKeys={[37, 38, 39, 40]}
              onKeyPress={this.setKey}
          />
          <HandleKeyTriggers
              pressedKey={key}
          />
        </div>
      )
  }
}

render(<Demo/>, document.querySelector('#demo'));
