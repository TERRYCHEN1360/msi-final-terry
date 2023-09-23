import axios from 'axios';

export const PUT_ORDER = 'PUT_ORDER'
export const GET_ORDER = 'GET_ORDER'
export const GET_TABLE_INFO = 'GET_TABLE_INFO'
export const UPDATE_ORDER = 'UPDATE_ORDER'
export const ALL_ORDER = 'ALL_ORDER'
export const DELETE_ORDER = 'DELETE_ORDER'
export const ALL_ORDEROBJ = 'ALL_ORDEROBJ'

const API_URL = process.env.REACT_APP_API_URL;

export function putOrder(order){
    const promise = axios.post(`${API_URL}/placeorder`,order)
        .then( (res) =>{
            console.log(res)
            return{
                neworder:res.data.order,
                success:res.data.response.success
            }
        })
    return{
        type: PUT_ORDER,
        payload:promise
    }
}

export function getOrder(){
    const promise = axios.get(`${API_URL}/getorder/${1}`)
    return{
        type: GET_ORDER,
        payload:promise
    }
}

export function allOrder(){
    const promise = axios.get(`${API_URL}/allorder`)
    return{
        type: ALL_ORDER,
        payload: promise
    }
}


export function allOrderobj(){
    const promise = axios.get(`${API_URL}/allorderobj`)
        .then( (res) =>{
            console.log(res.data)
            return{
                neworder: res.data.order,
                success:res.data.response.success
            }
        })
    return {
        type:ALL_ORDEROBJ,
        payload: promise
    }
}

export function getTableInfo(id){
    const promise = axios.get(`${API_URL}/gettableinfo/${id}`)
    return {
        type:GET_TABLE_INFO,
        payload: promise
    }
}

export function updateOrder(order){
    const promise = axios.put(`${API_URL}/updateorder`,order)
        .then( (res =>{
            return {
                neworder:res.data.order,
                success:res.data.response.success
            }
        }))
    return {
        type: UPDATE_ORDER,
        payload: promise
    }
}

export function deleteOrder(id){
    const promise = axios.delete(`${API_URL}/deleteorder/${id}`)
        .then((res)=>{
            return {
                neworder:res.data.order,
                success:res.data.response.success
            }
        })
    return{
        type:DELETE_ORDER,
        payload: promise
    }
}

