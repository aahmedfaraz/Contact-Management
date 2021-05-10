import React, {useContext} from 'react';
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';
import navbarContext from '../../context/navbar/navbarContext';

const Navbar = ({name, icon}) => {
    const {id} = useContext(navbarContext);
    return (
        <nav id="nav">
            <div className="logo">{name} <i className={icon}></i></div>
            <ul>
                <li>
                    <div>
                        <p>Hi Ahmed!</p>
                    </div>
                    <div>
                        <Link className={`list-item ${id === 'home' && 'selected'}`} to='/'>Home</Link>
                        <Link className={`list-item ${id === 'about' && 'selected'}`} to='/about'>About</Link>
                        <Link className={`list-item ${id === 'login' && 'selected'}`} to='/login'>Log In</Link>
                        <Link className={`list-item ${id === 'signup' && 'selected'} sign-up`} to='/signup'>Sign Up</Link>
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
