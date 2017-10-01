import React, { PureComponent } from 'react'
import { handleKeyPress} from "./utils/keyUtils";

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