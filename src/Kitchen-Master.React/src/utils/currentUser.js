import jwt_decode from 'jwt-decode';

export function setAccessToken(access_token) {
    var decode = jwt_decode(access_token);
    localStorage.setItem('access_token', access_token);
}

export function getAccessToken() {
    return localStorage.getItem('access_token');
}