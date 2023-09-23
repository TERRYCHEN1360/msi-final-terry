import axios from "axios/index";

export const ALL_EMPLOYEE = 'ALL_EMPLOYEE'
export const LOG_TIME = 'LOG_TIME'
export const ADJUST_TIME = 'ADJUST_TIME'
export const OUT_TIME = 'OUT_TIME'

const API_URL = process.env.REACT_APP_API_URL;

export function allEmp(){
    const promise = axios.get(`${API_URL}/getuser`)
    return {
        type: ALL_EMPLOYEE,
        payload: promise
    }
}

export function logTime(user){
    const promise = axios.post(`${API_URL}/logtime`, user)
    return {
        type:LOG_TIME,
        payload:promise
    }
}

export function outTime(user){
    const promise = axios.post(`${API_URL}/outtime`, user)
    return {
        type:OUT_TIME,
        payload:promise
    }
}

export function adjusttime(emp){
    const promise = axios.put(`${API_URL}/adjusttime`,emp)
    return{
        type:ADJUST_TIME,
        payload:promise
    }
}