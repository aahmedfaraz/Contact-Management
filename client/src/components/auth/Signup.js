import React, {useEffect, useContext} from 'react';
import {Link} from 'react-router-dom';
import navbarContext from '../../context/navbar/navbarContext';

const Signup = () => {
    const {gotoPage} = useContext(navbarContext);
    useEffect(() => {
        gotoPage('signup')
        //eslint-disable-next-line
    }, []);
    return (
        <form action="" className="signup-form">
            <h2>Create Account</h2>
            <div className="form-control">
                <label htmlFor="signup-username">Username</label>
                <input type="text" id="signup-username" />
            </div>
            <div className="form-control">
                <label htmlFor="signup-email">Email</label>
                <input type="email" id="signup-email" />
            </div>
            <div className="form-control">
                <label htmlFor="signup-password">Password</label>
                <input type="password" id="signup-password" />
            </div>
            <div className="form-control">
                <label htmlFor="signup-password2">Confirm Password</label>
                <input type="password" id="signup-password2" />
            </div>
            <input type="submit" value="Sign In" />
            <p>Already have an accout? Click <Link to="/login">here</Link> to login</p>
        </form>
    )
}

export default Signup;