import React from 'react';
import EmployeeControl from './EmployeeControl';
import BackButton from '../buttons/BackButton';
const Admin = () => {
    return (
        <div className='App'>
            {localStorage.getItem('roles').includes(5150) ? (
                <EmployeeControl />
            ) : (
                <p>Not Authorized</p>
            )}
            <BackButton />
        </div>
    );
};

export default Admin;
