import {KEY_CODES} from "../objects/keyCodes";

/**
 * Checks the key codes provided are valid key codes
 * @param keyCodes
 */
const checkKeyCodesAreValid = keyCodes => {
    if ([].concat(keyCodes).some(code => !KEY_CODES[code])) {
        console.error(
            `One or more of the codes you provided are not supported
            Codes: ${keyCodes}
            `
        );
    }
};
/**
 * Checks is the pressed key is a supported key and triggers on pressed function
 * @param event keypress event
 * @param keys array or single string of supported key codes
 * @param onPressed function to be triggered when the key has been pressed
 */
export const handleKeyPress = (keys, onPressed) => {
    checkKeyCodesAreValid(keys);
    return event => {
        const pressedKey = event.keyCode;
        const supportedKeys = [].concat(keys);
        if (supportedKeys.includes(pressedKey)) {
            onPressed(event);
        }
    };
}