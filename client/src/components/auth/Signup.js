import React, {useEffect, useState, useContext} from 'react';
import {Link} from 'react-router-dom';
import navbarContext from '../../context/navbar/navbarContext';
import alertContext from '../../context/alert/alertContext';
import authContext from '../../context/auth/authContext';

const Signup = props => {
    const {gotoPage} = useContext(navbarContext);
    const {setAlert} = useContext(alertContext);
    const {register, error, clearErrors, isAuthenticated} = useContext(authContext);

    useEffect(() => {
        gotoPage('signup')
        if(isAuthenticated) {
            props.history.push('/');
        }
        if(error !== null) {
            setAlert(error, 'danger');
            clearErrors();
        }
        //eslint-disable-next-line
    }, [error, isAuthenticated, props.history]);

    const [user, setUser] = useState({
        name: '',
        email: '',
        password: '',
        password2: ''
    });
    const {name, email, password, password2} = user;
    const onChange = e => setUser({...user, [e.target.name]: e.target.value});

    const onSubmit = e => {
        e.preventDefault();
        if( name.trim() === '' || email.trim() === '' || password.trim() === '' || password2.trim() === '' ) {
            setAlert('Some credentials are missing', 'danger');
        } else if ( password !== password2 ) {
            setAlert('Password and Confirm Password do not match', 'danger');
            setUser({...user, password2: ''});
        } else {
            register({
                name,
                email,
                password
            })
            setUser({
                name: '',
                email: '',
                password: '',
                password2: ''
            });
        }
    }

    return (
        <form onSubmit={onSubmit} className="signup-form">
            <h2>Create Account</h2>
            <div className="form-control">
                <label htmlFor="signup-username">Username</label>
                <input type="text" id="signup-username" name="name" value={name} onChange={onChange} />
            </div>
            <div className="form-control">
                <label htmlFor="signup-email">Email</label>
                <input type="email" id="signup-email" name="email" value={email} onChange={onChange} />
            </div>
            <div className="form-control">
                <label htmlFor="signup-password">Password</label>
                <input type="password" id="signup-password" name="password" value={password} onChange={onChange} minLength="6" />
            </div>
            <div className="form-control">
                <label htmlFor="signup-password2">Confirm Password</label>
                <input type="password" id="signup-password2" name="password2" value={password2} onChange={onChange} minLength="6" />
            </div>
            <input type="submit" value="Sign In" />
            <p>Already have an accout? Click <Link to="/login">here</Link> to login</p>
        </form>
    )
}

export default Signup;