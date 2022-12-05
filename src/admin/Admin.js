import React from 'react';
import AddNewEmployee from '../newEmployee/AddNewEmployee';

const Admin = () => {
    return (
        <div className='App'>
            {localStorage.getItem('roles').includes(5150) ? (
                <AddNewEmployee />
            ) : (
                <p>Not Authorized</p>
            )}
        </div>
    );
};

export default Admin;
