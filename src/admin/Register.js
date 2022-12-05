import React from 'react';
import handleRegister from './handleRegister.js';
import { useNavigate } from 'react-router-dom';
import DataContext from '../Context/DataContext';
import { useContext } from 'react';

const Register = () => {
    const {
        password,
        setPassword,
        username,
        setUsername,
        registered,
        setRegistered,
    } = useContext(DataContext);
    const navigate = useNavigate();
    return (
        <form className='App' onSubmit={(e) => e.preventDefault()}>
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
            <label>register</label>
            <button
                onClick={() => {
                    handleRegister(
                        username,
                        password,
                        registered,
                        setRegistered
                    );
                    navigate(-1);
                }}
            >
                register
            </button>
        </form>
    );
};

export default Register;
