import kmApi from '../kmApiRequest';

export function register(email, password) {
    return kmApi.post('account/register',
        {
            email,
            password
        });
}

export function login(email, password) {
    return kmApi.post('account/login',
        {
            email,
            password
        });
}

