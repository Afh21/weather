// ================ STORE ================

import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk'; // Para Middleware 

// Importa los reducers { cities, city }
import reducers from './../reducers';

const initialState = { city: 'Bogota,CO' };
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;      

// La funct createStore() espera un reducer()
export const store = createStore( reducers, initialState, composeEnhancers(applyMiddleware(thunk)) );

