import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {Provider} from "react-redux";
import ReduxPromise from "redux-promise";
import {applyMiddleware, createStore} from"redux";
import rootReducer from "./reducers/root.Reducer";
import {BrowserRouter} from "react-router-dom";
import {Route,Switch} from "react-router";
import 'bootstrap/dist/css/bootstrap.min.css';
import DineIn from "./DineIn"
import login from "./login"
import Logout from "./Logout"
import auth from "./auth.hoc"
import Delivery from "./Delivery"
import Dailysales from "./Dailysales"
import register from "./component/Register"
import Addmenu from "./component/Addmenu"
import Currentorder from "./component/currentorder";
import Bartender from "./component/Bartender"
import Cooker from "./component/Cooker";
import Employee from "./component/Employees"
import Mainmenu from "./component/MainMenuCp"
import orders from "./component/test"

const createStoreWithMiddleware = applyMiddleware(ReduxPromise)(createStore)

ReactDOM.render(
    <Provider store={createStoreWithMiddleware(rootReducer)}>
        <BrowserRouter>
            <App>
                <Switch>
                    <Route path='/Login' component={login}/>
                    <Route path='/logout' component={Logout}/>
                    <Route path='/Menu' component={Mainmenu}/>
                    <Route path='/currentorder' component={Currentorder}/>
                    <Route path='/dinein' component={auth(DineIn)}/>
                    <Route path='/register' component={register}/>
                    <Route path='/Delivery' component={auth(Delivery)}/>
                    <Route path='/add menu' component={(Addmenu)}/>
                    <Route path='/Sales History' component={auth(Dailysales)}/>
                    <Route path='/bartender' component={Bartender}/>
                    <Route path='/cooker' component={Cooker}/>
                    <Route path='/employee' component={Employee}/>
                    <Route component={Mainmenu}/>
                </Switch>
            </App>

        </BrowserRouter>
    </Provider>, document.querySelector('#root'));



// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
