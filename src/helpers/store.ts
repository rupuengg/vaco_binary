import { applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";
import logger from 'redux-logger';
import reducers from '../reducers';
import { composeWithDevTools } from "redux-devtools-extension";

const middlewares = [thunk, logger];

const store = createStore(reducers, {}, composeWithDevTools(applyMiddleware(...middlewares)));

export default store;