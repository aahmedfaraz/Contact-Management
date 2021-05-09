import React, {useReducer} from 'react';
import {GOTO_PAGE} from '../types';
import navbarContext from './navbarContext';
import navbarReducer from './navbarReducer';

const NavbarState = props => {
    const initialState = 'home'
    const [state, dispatch] = useReducer(navbarReducer, initialState);

    const gotoPage = id => {
        dispatch({type: GOTO_PAGE, payload: id});
    }

    return <navbarContext.Provider value={{
        id:state,
        gotoPage,
    }}>
        {props.children}
    </navbarContext.Provider>
}

export default NavbarState;