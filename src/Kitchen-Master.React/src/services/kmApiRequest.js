import axios from 'axios';
import { getAccessToken } from '../utils/auth';

axios.interceptors.response.use(
    response => response,
    error => {
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
    }
)

export function get(resourcePath, data) {

}

export function post(resourcePath, data) {
    return axios.post(`${process.env.API_BASE_URL}${resourcePath}`, data, getConfig);
}

function getConfig() {
    const config = {
        baseURL: env.API_BASE_URL
    };

    const token = getAccessToken();
    if (token) {
        config.headers = {
            Authentication: `Bearer ${token}`
        };
    }
    return config;
}

export default {
    get,
    post
}