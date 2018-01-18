import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import promise from 'redux-promise-middleware';

import userDetailsReducer from './reducers/User_reducer';
import sessionReducer from './reducers/Session_reducer';
import projectDetailsReducer from './reducers/Project_reducer';

export default createStore(
    combineReducers({
        userDetailsReducer,
        sessionReducer,
        projectDetailsReducer
    }),
    {},
    applyMiddleware(thunk, promise())
);
