import React from 'react';
import handleLogout from './admin/handleLogout';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import DataContext from './Context/DataContext';

const Header = () => {
    const { username, setUsername, setPassword, login, setLogin } =
        useContext(DataContext);
    return (
        <header>
            <h2> Time</h2>
            {login ? (
                <>
                    <p style={{ color: 'gold' }}>
                        Hello{' '}
                        {' ' +
                            username.charAt(0).toUpperCase() +
                            username.slice(1)}
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
                </>
            ) : (
                <p> Hello Guest</p>
            )}
        </header>
    );
};

export default Header;
