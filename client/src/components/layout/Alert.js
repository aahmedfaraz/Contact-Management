import React, {Fragment, useContext} from 'react';
import alertContext from '../../context/alert/alertContext';
const Alert = () => {
    const {alerts} = useContext(alertContext);
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