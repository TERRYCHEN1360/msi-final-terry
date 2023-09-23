import {ALL_ORDER, DELETE_ORDER, GET_ORDER} from "../action/order.action";
import {PUT_ORDER} from "../action/order.action";
import {GET_TABLE_INFO} from "../action/order.action";
import {UPDATE_ORDER} from "../action/order.action";
import {ALL_ORDEROBJ} from "../action/order.action";

export default function menuReducer(state= {}, action){
    switch(action.type){
        case GET_ORDER:
            return state
        case PUT_ORDER:
            if(action.payload.success){
                state.order = action.payload.neworder
                return {...state}
            }else {
                return state
            }
        case GET_TABLE_INFO:
            if(action.payload.data) {
                console.log(action.payload.data)
                state = action.payload.data
                return state
            }else{
                console.log("here")
                return null;
            }
        case UPDATE_ORDER:
            if(action.payload.success){
               state.order = action.payload.neworder
                return {...state}
            }else{
                console.log("im in")
                return state;
            }
        case ALL_ORDER:
            return action.payload.data
        case ALL_ORDEROBJ:
            if(action.payload.success){
                state.order = action.payload.neworder
                return {...state}
            }else{
                return state;
            }
        case DELETE_ORDER:
            console.log("im in")
            if(action.payload.success){
                state.order = null
                return{...state}
            }else{
                return state;
            }
        default:
            return {}
    }
}