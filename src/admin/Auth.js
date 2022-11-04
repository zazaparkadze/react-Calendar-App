import React from 'react';
import { useState } from 'react';
import handleLogIn from './handleLogIn';

const Auth = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
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
            <label>submit</label>
            <button onClick={() => handleLogIn(username, password)}>OK</button>
        </form>
    );
};

export default Auth;
