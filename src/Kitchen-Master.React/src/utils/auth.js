import jwtDecode from 'jwt-decode';

export function getCurrentUser() {
    const token = getAccessToken();
    if (!token)
        return null;

    const user = jwtDecode(token);

    if (Date.now() >= user.exp * 1000) {
        removeAccessToken();
        return null;
    }

    return user;
}

export function setAccessToken(access_token) {
    localStorage.setItem('access_token', access_token);
}

export function getAccessToken() {
    return localStorage.getItem('access_token');
}

function removeAccessToken() {
    localStorage.removeItem('access_token');
}