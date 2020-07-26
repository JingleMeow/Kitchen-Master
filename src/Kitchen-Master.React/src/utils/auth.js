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

export function removeAccessToken() {
    localStorage.removeItem('access_token');
}

export const passwordRegex = /^(?=.*[a-z]+)(?=.*[A-Z]+)(?=.*[0-9]+)(?=.*[.!@#\$%^&*(){}\[\]:;<>,\?\/~_\+\-=|]+).{8,32}$/;
export const passwordError = '{#label} should contain at least a lowercase letter, an uppercase letter, a digit and a 1 special character.';