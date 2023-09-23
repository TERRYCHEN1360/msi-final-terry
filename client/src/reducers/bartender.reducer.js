import {ALL_ORDER} from "../action/order.action";


export default function menuReducer(state= {}, action){
    switch(action.type){
        case ALL_ORDER:
            return action.payload.data
        default:
            return {}
    }
}