import expect from 'expect'
import React from 'react'
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
configure({ adapter: new Adapter() });

import {shallow} from 'enzyme';

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
})
