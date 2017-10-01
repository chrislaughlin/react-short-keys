import React, { PureComponent } from 'react'
import PropTypes from 'prop-types';
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

Keypress.propTypes = {
    onKeys: PropTypes.arrayOf(PropTypes.number).isRequired,
    onKeyPress: PropTypes.func.isRequired,
}

export default Keypress;