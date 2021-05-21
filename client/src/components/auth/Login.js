import React, {useEffect, useContext, useState} from 'react';
import {Link} from 'react-router-dom';
import navbarContext from '../../context/navbar/navbarContext';
import alertContext from '../../context/alert/alertContext';
import authContext from '../../context/auth/authContext';

const Login = props => {
    const {gotoPage} = useContext(navbarContext);
    const {setAlert} = useContext(alertContext);
    const {login , isAuthenticated, error, clearErrors} = useContext(authContext);
    useEffect(() => {
        gotoPage('login');
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
        email: '',
        password: ''
    });
    const {email, password} = user;
    const onChange = e => setUser({...user,[e.target.name]: e.target.value});

    const onSubmit = e => {
        e.preventDefault();
        if(email.trim() === '' || password.trim() === '') {
            setAlert('Some Credentials are missing', 'danger');
        } else {
            login({
                email,
                password
            })
            setUser({
                email: '',
                password: ''
            })
        }
    }

    return (
        <form onSubmit={onSubmit} className="login-form">
            <h2>User Log In</h2>
            <div className="form-control">
                <label htmlFor="login-email">Email</label>
                <input type="email" id="login-email" name="email" value={email} onChange={onChange} />
            </div>
            <div className="form-control">
                <label htmlFor="login-password">Password</label>
                <input type="password" id="login-password" name="password" value={password} onChange={onChange} minLength="6" />
            </div>
            <input type="submit" value="Log In" />
            <p>No accout? Click <Link to="/signup">here</Link> to create one</p>
        </form>
    )
}

export default Login;