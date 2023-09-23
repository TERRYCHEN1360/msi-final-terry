import {LOG_IN, LOGOUT, REGISTER} from "../action/login.action";


export default function menuReducer(state= false, action){
    let res;
    switch(action.type){
        case LOG_IN:
            state = action.payload.data
            return state
        case LOGOUT:
            res = action.payload.data;
            console.log(res);
            if (res.success) {
                return false;
            } else {
                return state;
            }
        case REGISTER:
            alert(action.payload.data.success)
            console.log(action.payload.data)
            return state;
        default:
            return state
    }
}