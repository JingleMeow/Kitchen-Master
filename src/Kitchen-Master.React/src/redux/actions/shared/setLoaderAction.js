export const SET_LOADER = 'SET_LOADER';

export function setLoader(isLoading) {
    return {
        type: SET_LOADER,
        payload: isLoading
    }
}