import {ADJUST_TIME, ALL_EMPLOYEE, LOG_TIME, OUT_TIME} from "../action/employee.action";


export default function menuReducer(state= [], action){
    switch(action.type){
        case ALL_EMPLOYEE:
            console.log(action.payload.data)
            state= action.payload.data
            return [...state]
        case LOG_TIME:
            return state
        case ADJUST_TIME:
            return [...state]
        case OUT_TIME:
            return [...state]
        default:
            return []
    }
}