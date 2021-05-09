import React, {useEffect, useContext, useState} from 'react';
import {Link} from 'react-router-dom';
import navbarContext from '../../context/navbar/navbarContext';

const Login = () => {
    const {gotoPage} = useContext(navbarContext);
    useEffect(() => {
        gotoPage('login')
        //eslint-disable-next-line
    }, []);

    const [user, setUser] = useState({
        username: '',
        password: ''
    });
    const {username, password} = user;
    const onChange = e => setUser({...user,[e.target.name]: e.target.value});

    return (
        <form action="" className="login-form">
            <h2>Log In</h2>
            <div className="form-control">
                <label htmlFor="login-username">Username</label>
                <input type="text" id="login-username" name="username" value={username} onChange={onChange} />
            </div>
            <div className="form-control">
                <label htmlFor="login-password">Password</label>
                <input type="password" id="login-password" name="password" value={password} onChange={onChange} />
            </div>
            <input type="submit" value="Log In" />
            <p>No accout? Click <Link to="/signup">here</Link> to create one</p>
        </form>
    )
}

export default Login;