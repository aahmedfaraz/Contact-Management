import React, {Fragment, useContext, useEffect} from 'react';
import Welcome from '../layout/Welcome';
import navbarContext from '../../context/navbar/navbarContext'

const Home = () => {
    const {gotoPage} = useContext(navbarContext);
    useEffect(() => {
        gotoPage('home')
        //eslint-disable-next-line
    }, []);
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