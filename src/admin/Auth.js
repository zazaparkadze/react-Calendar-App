import React from 'react';
import handleLogIn from './handleLogIn';
import { Link } from 'react-router-dom';
import DataContext from '../Context/DataContext';
import { AppContext } from '../App';
import { useContext } from 'react';
const Auth = () => {
    const {
        setLogin,
        username,
        setUsername,
        password,
        setPassword,
        registered,
        setRegistered,
    } = useContext(DataContext);
    const { setAuth } = useContext(AppContext);
    return (
        <form className='App'>
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
            <Link to='/nav'>
                <button
                    onClick={() =>
                        handleLogIn(
                            username,
                            setUsername,
                            password,
                            setPassword,
                            setLogin,
                            setAuth,
                            setRegistered
                        )
                    }
                >
                    Log in
                </button>
            </Link>
            <Link className='Link' to='/registration'>
                <p>Registration</p>
            </Link>
            <p>Please, fill all fields</p>
        </form>
    );
};

export default Auth;
