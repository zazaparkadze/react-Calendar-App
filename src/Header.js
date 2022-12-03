import React from 'react';
import handleLogout from './admin/handleLogout';
import { Link } from 'react-router-dom';

const Header = ({ username, setUsername, setPassword, login, setLogin }) => {
    return (
        <header>
            <h2> Time</h2>
            <p style={{ color: 'gold' }}>
                Hello
                {login
                    ? ' ' + username.charAt(0).toUpperCase() + username.slice(1)
                    : '  Guest'}
                <Link to='/'>
                    <button
                        style={{
                            color: 'white',
                            backgroundColor: 'black',
                            marginRight: '0.5rem',
                        }}
                        onClick={() => {
                            handleLogout(setLogin);
                            setUsername('');
                            setPassword('');
                        }}
                    >
                        {' '}
                        logout
                    </button>
                </Link>
            </p>
        </header>
    );
};

export default Header;
