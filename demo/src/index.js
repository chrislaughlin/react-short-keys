import React, {Component} from 'react'
import {render} from 'react-dom'
import 'console-json';
import KeyPress, {ARROW_DOWN,ARROW_LEFT,ARROW_RIGHT,ARROW_UP} from '../../src/index';
import HandleKeyTriggers from './handleKeyTriggers';

class Demo extends Component {

  state = {key: ''};


  setKey = event => this.setState({key: event.key});

  render() {
    const {
      key,
     
    } = this.state;

    return (
        <div>
          <h1>react-short-keys Demo Yo!</h1>
          <KeyPress
              onKeys={[ARROW_LEFT, ARROW_RIGHT]}
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
