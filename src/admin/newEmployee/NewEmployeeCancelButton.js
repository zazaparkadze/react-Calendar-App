import React from 'react';

const NewEmployeeCancelButton = ({ setNewEmployee }) => {
    return (
        <button
            className='makeChange'
            onClick={() => {
                setNewEmployee({
                    id: 0,
                    firstname: '',
                    lastname: '',
                    employeeID: 0,
                });
            }}
        >
            Make Change
        </button>
    );
};

export default NewEmployeeCancelButton;
