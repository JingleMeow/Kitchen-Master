export const SET_DEFINITIONS = 'SET_DEFINITIONS';

export function setDefinitionsAction(definitions) {
    return {
        type: SET_DEFINITIONS,
        payload: definitions
    }
}