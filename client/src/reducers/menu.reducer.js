import {DELETE_MENU, GET_MENU, EDIT_MENU} from "../action/menu.action";
import {ADD_MENU} from "../action/menu.action";

export default function menuReducer(state= [], action){
    switch(action.type){
        case GET_MENU:
            state = action.payload.data;
            return state
        case ADD_MENU:
            alert(action.payload.data.response.success)
            state = action.payload.data.menu
            return [...state]
        case DELETE_MENU:
            console.log(action.payload.data)
            state = action.payload.data.menu
            return [...state]
        case EDIT_MENU:
            alert(action.payload.data.response.success)
            state = action.payload.data.menu
            return[...state]
        default:
            return state
    }
}