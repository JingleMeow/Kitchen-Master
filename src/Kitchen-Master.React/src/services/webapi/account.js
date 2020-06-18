import kmApi from '../kmApiRequest';

function login(email, password) {
    return kmApi.post('account/login',
        {
            email,
            password
        });
}

export { login };
