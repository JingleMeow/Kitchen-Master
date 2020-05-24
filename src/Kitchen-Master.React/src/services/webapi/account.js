import axios from 'axios';

function login(email, password) {
    return axios.post('https://localhost:5001/api/account/login',
        {
            email,
            password
        });
}

export {login};
