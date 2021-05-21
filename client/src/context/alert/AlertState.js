import React, {useReducer} from 'react';
import {v4 as uuid} from 'uuid';
import alertContext from './alertContext';
import alertReducer from './alertReducer';

import {
    SET_ALERT,
    REMOVE_ALERT
} from '../types';

const AlertState = props => {
    const initialState = [];

    const [state, dispatch] = useReducer(alertReducer, initialState);

    const setAlert = (msg, type, timeout = 5000) => {
        // Show message
        const id = uuid();
        dispatch({type: SET_ALERT, payload: {
            id,
            msg,
            type
        }})

        setTimeout(() => {
            clearAlert(id);
        }, timeout);
    }

    const clearAlert = id => {
        dispatch({type: REMOVE_ALERT, payload: id});
    }

    return (
        <alertContext.Provider value={{
            alerts: state,
            setAlert
        }}>
            {props.children}
        </alertContext.Provider>
    )

}

export default AlertState;