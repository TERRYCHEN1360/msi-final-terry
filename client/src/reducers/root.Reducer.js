import {combineReducers} from "redux";
import menuReducer from "./menu.reducer";
import loginReducer from "./login.reducer"
import {reducer as formReducer} from 'redux-form'
import orderReducer from "./order.reducer"
import customerreducer from "./customer.reducer";
import bartenderReducer from "./bartender.reducer"
import employeeReducer from "./employee.reducer"
import cookerReducer from "./cooker.reducer"
import dailysalesReducer from "./dailysales.reducer"


const rootReducer = combineReducers({
    menu: menuReducer,
    form: formReducer,
    login: loginReducer,
    order: orderReducer,
    customer: customerreducer,
    bartender: bartenderReducer,
    employee: employeeReducer,
    cooker:cookerReducer,
    dailysales: dailysalesReducer
});

export default rootReducer;