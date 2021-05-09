import {GOTO_PAGE} from '../types';

const navbarReducer = (state, action) => {
    switch(action.type) {
        case GOTO_PAGE:
            return action.payload;
        default:
            return state;
    }
}

export default navbarReducer;