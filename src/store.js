import {createStore, combineReducers, applyMiddleware} from "redux";

import userDetails from "./reducers/User_reducer";

export default createStore(
    combineReducers({
        userDetails
    }),
    {},
    applyMiddleware()
);
