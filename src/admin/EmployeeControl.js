import React from 'react';
import { Link } from 'react-router-dom';
const EmployeeControl = () => {
    return (
        <div>
            <Link to='AddNewEmployee'>
                <p>Add New Employee</p>
            </Link>
            <Link to='DeleteEmployee'>
                <p>Delete Employee</p>
            </Link>
        </div>
    );
};

export default EmployeeControl;
