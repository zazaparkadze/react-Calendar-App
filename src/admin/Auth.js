import React from 'react';
import handleLogIn from './handleLogIn';
import { Link } from 'react-router-dom';

const Auth = ({
    login,
    setLogin,
    username,
    setPassword,
    setUsername,
    password,
    setRegistration,
    registered,
}) => {
    return (
        <form className='App' onSubmit={(e) => e.preventDefault()}>
            {registered === 'Registered' && (
                <p style={{ color: 'green' }}>
                    You have {registered} successfully
                </p>
            )}
            <label>username</label>
            <input
                id='username'
                required
                type='text'
                onChange={(e) => setUsername(e.target.value)} //check
            />
            <label>password</label>
            <input
                id='password'
                required
                type='text'
                onChange={(e) => setPassword(e.target.value)} // check
            />
            <label>submit</label>
            <button onClick={() => handleLogIn(username, password, setLogin)}>
                Log in
            </button>
            <Link
                className='Link'
                to='/registration'
                onClick={() => setRegistration(true)}
            >
                <p>Registration</p>
            </Link>
        </form>
    );
};

export default Auth;
