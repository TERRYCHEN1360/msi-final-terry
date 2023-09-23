import axios from 'axios';
import qs from 'qs';


export const LOG_IN = 'LOG_IN'
export const LOGOUT = 'LOGOUT';
export const REGISTER = 'REGISTER'

const API_URL = process.env.REACT_APP_API_URL;

export function getLogin(logininfo){
    const promise = axios.post(`${API_URL}/login`,qs.stringify(logininfo),{withCredentials: true})
    return{
        type:LOG_IN,
        payload: promise
    }
}

export function logout(callback) {
    const promise = axios.post(`${API_URL}/logout`, {withCredentials: true})
        .then(res => {
            callback(res);
            return res;
        });
    return {
        type: LOGOUT,
        payload: promise
    }
}

export function register(user){
    const promise = axios.post(`${API_URL}/register`, user,{withCredentials: true})
    return{
        type: REGISTER,
        payload: promise
    }
}