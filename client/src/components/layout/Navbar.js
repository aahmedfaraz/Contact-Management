import React from 'react';
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';

const Navbar = ({name, icon}) => {

    const selected = e => {
        Array.from(document.getElementById('nav').querySelectorAll('.list-item')).forEach(item => item.classList.remove('selected'));
        document.getElementById(`${e.target.id}`).classList.add('selected');
    }

    return (
        <nav id="nav">
            <div className="logo">{name} <i className={icon}></i></div>
            <ul>
                <li>
                    <Link onClick={selected} id="home" className='list-item selected' to='/'>Home</Link>
                    <Link onClick={selected} id="about" className='list-item' to='/about'>About</Link>
                    <Link onClick={selected} id="login" className='list-item' to='/login'>Log In</Link>
                    <Link onClick={selected} id="signup" className='list-item sign-up' to='/signup'>Sign Up</Link>
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
