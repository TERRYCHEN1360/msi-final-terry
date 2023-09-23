import axios from 'axios';

export const SET_STATUS = 'SET_STATUS'
export const FOOD_STATUS = 'FOOD_STATUS'

const API_URL = process.env.REACT_APP_API_URL;

export function setStatus(order){
    const promise = axios.put(`${API_URL}/setstatus`, order)
    return {
        type: SET_STATUS,
        payload: promise
    }
}

export function setFoodStatus(order){
    const promise = axios.put(`${API_URL}/setorderstatus`, order)
    return{
        type:FOOD_STATUS,
        payload: promise
    }
}