import React, { Component } from 'react';

class HandleKeyTriggers extends Component {

    render() {
        console.log(this.props);
        return (
            <section>
                The last key pressed was <b>{this.props.pressedKey}</b>
            </section>
        );
    }
}

export default HandleKeyTriggers;