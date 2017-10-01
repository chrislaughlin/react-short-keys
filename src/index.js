import React, { PureComponent } from 'react'
import { handleKeyPress} from "./utils/keyUtils";
import { ARROW_LEFT, ARROW_RIGHT, ARROW_UP, ARROW_DOWN } from './objects/commonCodes.js';

class Keypress extends PureComponent {

    onKeyPress = handleKeyPress(this.props.onKeys, this.props.onKeyPress);

    componentDidMount() {
        window.addEventListener('keydown', this.onKeyPress);
    }

    componentWillUnmount() {
        window.removeEventListener('keydown', this.onKeyPress);
    };

    render() {
        return <div/>;
    }
}

export default Keypress;
export { ARROW_LEFT, ARROW_RIGHT, ARROW_UP, ARROW_DOWN };