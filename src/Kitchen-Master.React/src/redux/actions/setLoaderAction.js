export const SET_LOADER = 'SET_LOADER';

export default isLoading => {
    return {
        type: SET_LOADER,
        payload: isLoading
    }
}