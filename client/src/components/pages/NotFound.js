import React, {Fragment} from 'react'
import {Link} from 'react-router-dom';

const NotFound = () => {
    return (
        <Fragment>
            <h1>Page Not Found</h1>
            <p>Click <Link to="/">here</Link> to go to Home</p>
        </Fragment>
    )
}

export default NotFound;