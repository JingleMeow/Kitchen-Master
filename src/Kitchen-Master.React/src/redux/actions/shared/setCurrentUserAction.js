export const SET_CURRENT_USER = 'SET_CURRENT_USER';

export function setCurrentUserAction(account) {
    return {
        type: SET_CURRENT_USER,
        payload: account
    }
}
