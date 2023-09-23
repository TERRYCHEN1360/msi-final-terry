import axios from 'axios';

export const GET_HISTORY = 'GET_HISTORY';

const API_URL = process.env.REACT_APP_API_URL;

export function getHistory(){
    const promise = axios.get(`${API_URL}/orderhistory`)
    return{
        type: GET_HISTORY,
        payload: promise
    }
}