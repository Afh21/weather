// ================ reducer City ================

import { SET_CITY } from './../actions';

// Esto es un reducer() que evalua un action()
// express operator -> ...

export const city = (state = {} , action) => {
    switch (action.type) {
        case SET_CITY:
            return action.value;
            // return action.payload;
        default:
            return state;            
    }    
}