import { kmApi } from '../../services/webapi';
import { setLoaderAction } from './shared';

function get(resourcePath, params, showLoader = false) {
    return dispatch => {
        const options = {
            interceptor: showLoader ? buildShowLoaderInterceptor(dispatch) : {}
        }
        return kmApi.get(resourcePath, options, params);
    };
}

function post(resourcePath, data, showLoader) {
    return dispatch => {
        const options = {
            interceptor: showLoader ? buildShowLoaderInterceptor(dispatch) : {}
        }
        return kmApi.post(resourcePath, data, options);
    };
}

function putImage(resourcePath, image) {
    return dispatch => {
        const options = {
            config: {
                headers: {
                    "Content-type": "multipart/form-data"
                }
            }
        }
        const formData = new FormData();
        formData.append("image", image);
        return kmApi.put(resourcePath, formData, options);
    }
}

export default { get, post, putImage }

function buildShowLoaderInterceptor(dispatch) {
    return {
        onRequest: () => dispatch(setLoaderAction(true)),
        onFullfilled: () => dispatch(setLoaderAction(false)),
        onError: () => dispatch(setLoaderAction(false))
    };
}
