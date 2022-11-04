import React from 'react';

const Header = () => {
    return (
        <header>
            <h2> Time</h2>
            <p> Copyright &copy; {new Date().getFullYear()}</p>
        </header>
    );
};

export default Header;
