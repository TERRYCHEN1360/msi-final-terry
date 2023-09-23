import {GET_HISTORY} from "../action/dailysales.action";


export default function menuReducer(state= [], action){
    switch(action.type){
        case GET_HISTORY:
            state= action.payload.data
            return [...state]
        default:
            return []
    }
}