import axios from 'axios';
import { getAccessToken } from '../../utils/auth';

function get(resourcePath, interceptor) {
    const instance = createInstance(interceptor);
    return instance.get(resourcePath);
}

function post(resourcePath, data, interceptor) {
    const instance = createInstance(interceptor);
    return instance.post(resourcePath, data);
}

function createInstance(interceptor) {
    const config = getConfig();
    const instance = axios.create(config);
    const { onRequest, onFullfilled, onError } = interceptor ?? {};
    instance.interceptors.request.use(
        request => {
            if (onRequest)
                onRequest();
            return request;
        });
    instance.interceptors.response.use(
        response => {
            if (onFullfilled)
                onFullfilled();
            return response;
        },
        error => {
            if (onError)
                onError();

            console.log(error);
            const info = {
                message: error.message
            }
            if (error.response) {
                const { status, data } = error.response;
                info.status = status;

                if (status >= 400 && status < 500 && data) {
                    info.data = data;
                }
            }
            return Promise.reject(info);
        })
    return instance;
}

function getConfig() {
    const config = {
        baseURL: process.env.API_BASE_URL
    };

    const token = getAccessToken();
    if (token) {
        config.headers = {
            Authorization: `Bearer ${token}`
        };
    }
    return config;
}

export default {
    get,
    post
}