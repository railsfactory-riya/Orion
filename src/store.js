import { createStore, combineReducers, applyMiddleware } from 'redux';
import logger from 'redux-logger';

import userDetails from './reducers/UserReducer';
import signInDetails from './reducers/SignInReducer';

export default createStore(
    combineReducers({}),
    {},
    applyMiddleware(logger)
);
