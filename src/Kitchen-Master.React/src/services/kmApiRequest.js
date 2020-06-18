import axios from 'axios';
import { getAccessToken } from '../utils/auth';

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