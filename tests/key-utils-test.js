import expect from 'expect'
import sinon from 'sinon';

import { handleKeyPress } from 'src/utils/keyUtils';

describe('Key Utils', function () {

    it('should trigger onPressed func when key is supported key', () => {
        const onKeyPressedStub = sinon.stub();
        handleKeyPress([3], onKeyPressedStub)({keyCode: 3});

        expect(onKeyPressedStub.called).toBeTruthy();
    });

    it('should not trigger onPressed func when key is not a supported key', () => {
        const onKeyPressedStub = sinon.stub();
        handleKeyPress([3], onKeyPressedStub)({keyCode: 4});

        expect(onKeyPressedStub.called).toBeFalsy();
    });

});
