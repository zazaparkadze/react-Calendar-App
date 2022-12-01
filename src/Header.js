import React from 'react';
import handleLogout from './admin/handleLogout';

const Header = ({ username, login, setLogin }) => {
    return (
        <header>
            <h2> Time</h2>
            <p>
                {' '}
                Copyright &copy; {new Date().getFullYear()} Hello
                {login ? ' ' + username : '  Stranger'}
                <button
                    style={{ color: 'white', backgroundColor: 'black' }}
                    onClick={() => handleLogout(setLogin)}
                >
                    {' '}
                    logout
                </button>
            </p>
        </header>
    );
};

export default Header;
