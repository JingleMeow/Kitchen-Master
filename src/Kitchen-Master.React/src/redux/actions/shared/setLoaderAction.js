export const SET_LOADER = 'SET_LOADER';

export function setLoaderAction(isLoading) {
    return {
        type: SET_LOADER,
        payload: isLoading
    }
}