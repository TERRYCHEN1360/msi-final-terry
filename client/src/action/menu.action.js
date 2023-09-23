import axios from 'axios';

export const GET_MENU = 'GET_MENU';
export const ADD_MENU = 'ADD_MENU'
export const DELETE_MENU = 'DELETE_MENU'
export const EDIT_MENU = 'EDIT_MENU'

const API_URL = process.env.REACT_APP_API_URL;

export function getMenu(){
    const promise = axios.get(`${API_URL}/menu`)
    return{
        type: GET_MENU,
        payload: promise
    }
}

export function addMenu(menu){
    const promise = axios.post(`${API_URL}/addmenu`, menu)
    return{
        type:ADD_MENU,
        payload:promise
    }
}

export function delMenu(id){
    const promise = axios.delete(`${API_URL}/deletemenu/${id}`)
    return{
        type:DELETE_MENU,
        payload:promise
    }
}

export function editMenu(menu){
    const promise = axios.put(`${API_URL}/editmenu`,menu)
    return{
        type:EDIT_MENU,
        payload:promise
    }
}