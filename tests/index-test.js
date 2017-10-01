import expect from 'expect'
import React from 'react'
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
configure({ adapter: new Adapter() });

import {shallow} from 'enzyme';
import sinon from 'sinon';

import KeyPress from '../src/index';

describe('KeyPress', () => {

    const minProps = {
        onKeys: [3, 8],
        onKeyPress: () => {}
    };

    it('renders empty div', () => {
        const comp = shallow(
            <KeyPress
                {...minProps}
            />
        );
        expect(comp.type()).toEqual('div');
    });

    it('should add event listener when mounting', () => {
        const addEventStub = sinon.stub(window, 'addEventListener');
        const comp = shallow(
            <KeyPress
                {...minProps}
            />
        );

        comp.instance().componentDidMount();

        expect(addEventStub.withArgs(
            'keydown',
            sinon.match.func
        ).called).toBeTruthy();

        addEventStub.restore();
    });

    it('should remove event listener when unmounting', () => {
        const removeEventStub = sinon.stub(window, 'removeEventListener');
        const comp = shallow(
            <KeyPress
                {...minProps}
            />
        );

        comp.instance().componentWillUnmount();

        expect(removeEventStub.withArgs(
            'keydown',
            sinon.match.func
        ).called).toBeTruthy();

        removeEventStub.restore();
    });
});
