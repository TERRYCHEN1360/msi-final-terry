import {ALL_ORDER} from "./order.action";
import axios from "axios/index";

const API_URL = process.env.REACT_APP_API_URL;


export function allOrder(){
    const promise = axios.get(`${API_URL}/allorder`)
    return{
        type: ALL_ORDER,
        payload: promise
    }
}
