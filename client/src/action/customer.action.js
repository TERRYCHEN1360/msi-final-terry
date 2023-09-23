import axios from 'axios';

export const ADD_CUSTOMER = 'ADD_CUSTOMER'
export const FIND_CUSTOMER = 'FIND_CUSTOMER'

const API_URL = process.env.REACT_APP_API_URL;

export function addcustomer(c){
    const promise = axios.post(`${API_URL}/addcustomer`, c)
    return{
        type:ADD_CUSTOMER,
        payload: promise
    }
}

export function findcustomer(phone){
    const promise = axios.get(`${API_URL}/findcustomer/${phone}`)
    return{
        type:FIND_CUSTOMER,
        payload:promise
    }
}
