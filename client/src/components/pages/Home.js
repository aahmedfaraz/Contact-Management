import React, {Fragment} from 'react';
import Welcome from '../layout/Welcome';

const Home = () => {
    const login = false;
    return (
        <Fragment>
            {
                !login &&
                <Welcome />
            }
        </Fragment>
    )
}

export default Home;