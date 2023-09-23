import {ADD_CUSTOMER, FIND_CUSTOMER} from "../action/customer.action";


export default function customerreducer (state= [], action){
    switch(action.type){
        case ADD_CUSTOMER:
            return state;
        case FIND_CUSTOMER:
            console.log(action.payload.data)
            return action.payload.data
        default:
            return state
    }
}