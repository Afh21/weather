// ================ STORE ================

import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk'; // Para Middleware 
import reducers from '../reducers';
 
// const initialState = { city: 'Bogota,CO' };

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION__COMPOSE__ || compose;

// La funct createStore() espera un reducer()
export const store = createStore( reducers, { city: 'Bogota, CO'}, composeEnhancers(applyMiddleware(thunk)) );

