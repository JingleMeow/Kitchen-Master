export const SET_CURRENT_USER = 'SET_CURRENT_USER';

export function setCurrentUser(account) {
    return {
        type: SET_CURRENT_USER,
        payload: account
    }
}
