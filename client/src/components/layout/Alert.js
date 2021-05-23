import React, {Fragment, useContext, useEffect} from 'react';
import alertContext from '../../context/alert/alertContext';
import contactContext from '../../context/contact/contactContext';
const Alert = () => {
    const {alerts, setAlert} = useContext(alertContext);
    const {error, clearError} = useContext(contactContext);
    useEffect(() => {
        error && setAlert(error);
        clearError();
        //eslint-disable-next-line
    }, []);
    return (
        <Fragment>
            {
                alerts.length > 0 &&
                alerts.map(error => 
                    <div key={error.id} className={`alert ${error.type}`}>
                        <i className="fas fa-info-circle"/> {error.msg}
                    </div>
                )
            }
        </Fragment>
    )
}

export default Alert;