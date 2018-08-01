'use strict';

import { createStore, applyMiddleware } from 'redux';
import reduxThunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly';
import Reducer from './combineReducer';

const store = createStore(Reducer, initialState, composeWithDevTools(
    applyMiddleware(reduxThunk)
));

export default store;