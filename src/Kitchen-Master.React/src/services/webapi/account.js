import kmApi from '../kmApiRequest';
import { createShowLoaderInterceptor } from './interceptorHelper';

export function register(email, password, setLoader) {
    return kmApi.post('account/register',
        {
            email,
            password
        },
        createShowLoaderInterceptor(setLoader));
}

export function login(email, password, setLoader) {
    return kmApi.post('account/login',
        {
            email,
            password
        },
        createShowLoaderInterceptor(setLoader));
}

export function confirmAccount(model, setLoader) {
    return kmApi.post('account/confirmAccount',
        model,
        createShowLoaderInterceptor(setLoader));
}