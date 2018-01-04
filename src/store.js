import {createStore, combineReducers, applyMiddleware} from "redux";

import personalDetails from "./reducers/PersonalDetails_reducer";

export default createStore(
    combineReducers({
        personalDetails
    }),
    {},
    applyMiddleware()
);
