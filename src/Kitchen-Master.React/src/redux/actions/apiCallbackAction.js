import { kmApi } from '../../services/webapi';
import { setLoaderAction } from './shared';
import { refreshTokenAction } from '../actions/account'

function get(resourcePath, showLoader) {
    return dispatch => {
        const interceptor = buildInterceptor(showLoader, dispatch);
        return kmApi.get(resourcePath, interceptor);
    };
}

function post(resourcePath, data, showLoader) {
    return dispatch => {
        const interceptor = buildInterceptor(showLoader, dispatch);
        return kmApi.post(resourcePath, data, interceptor);
    };
}

function buildInterceptor(showLoader, dispatch) {
    const onRequest = () => {
        if (showLoader) {
            dispatch(setLoaderAction(true));
        }
    }
    const onFullfilled = () => {
        dispatch(refreshTokenAction());
        if (showLoader) {
            dispatch(setLoaderAction(false));
        }
    }
    const onError = () => {
        dispatch(refreshTokenAction());
        if (showLoader) {
            dispatch(setLoaderAction(false));
        }
    }
    return { onRequest, onFullfilled, onError };
}

export default { get, post }
