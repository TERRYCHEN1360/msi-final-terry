import {SET_STATUS,FOOD_STATUS} from "../action/cooker.action";

export default function cookerReducer(state = {} ,action){
    switch(action.type){
        case SET_STATUS:
            console.log(action.payload.data)
            return state
        case FOOD_STATUS:
            return state
        default:
            return state
    }
}