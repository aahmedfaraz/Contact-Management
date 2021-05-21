import React, {Fragment, useContext} from 'react';
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';
import navbarContext from '../../context/navbar/navbarContext';
import authContext from '../../context/auth/authContext';

const Navbar = ({name, icon}) => {
    const {id} = useContext(navbarContext);
    const {isAuthenticated, user, logout} = useContext(authContext);

    const logoutUser = e => {
        e.preventDefault();
        logout();
    }
    return (
        <nav id="nav">
            <div className="logo"><i className={icon}/> {name}</div>
            <ul>
                <li>
                    {
                        isAuthenticated && user !== null &&
                        <div>
                            <p>Hi {user.name}!</p>
                        </div>
                    }
                    <div>
                        <Link className={`list-item ${id === 'home' && 'selected'}`} to='/'>Home</Link>
                        <Link className={`list-item ${id === 'about' && 'selected'}`} to='/about'>About</Link>
                        {
                            !isAuthenticated ? (
                                <Fragment>
                                    <Link className={`list-item ${id === 'login' && 'selected'}`} to='/login'>Log In</Link>
                                    <Link className={`list-item ${id === 'signup' && 'selected'} sign-up`} to='/signup'>Sign Up</Link>
                                </Fragment>
                            ) : <button className="list-item logout" onClick={logoutUser}>Logout</button>
                        }
                    </div>
                </li>
            </ul>
        </nav>
    )
}

Navbar.prototype = {
    name: PropTypes.string.isRequired,
    icon: PropTypes.string.isRequired,
}

Navbar.defaultProps = {
    name: 'Contact Manager',
    icon: 'fas fa-id-card-alt'
}

export default Navbar;
