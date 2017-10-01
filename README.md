# react-short-keys

[![npm package][npm-badge]][npm]

A React component to capture and action on keyboard key press.

# Install

Install via npm or yarn

```
npm i react-short-keys -S
```
or

```
yarn add react-short-keys
```

#Use

Add the KeyPress component where you need to handle a keypress e.g

```
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
```

The above example listens for the arrow keys and triggers a function only when an arrow key is triggered.

![alt text](keypress.gif)

[npm-badge]: https://img.shields.io/npm/v/npm-package.png?style=flat-square
[npm]: https://www.npmjs.org/package/react-short-keys

#edited

Edit commonCodes.js in /src/objects which would work with the default KeyPress component.