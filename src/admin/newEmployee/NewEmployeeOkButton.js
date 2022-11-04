import React from 'react';
import handleNewEmployee from './handleNewEmployee';

const NewEmployeeOkButton = ({
    newEmployee,
    allEmployees,
    setAllEmployees,
    schedule,
    setSchedule,
}) => {
    return (
        <button
            className='confirm'
            onClick={() => {
                handleNewEmployee(
                    newEmployee,
                    allEmployees,
                    setAllEmployees,
                    schedule,
                    setSchedule
                );
            }}
        >
            Confirm
        </button>
    );
};

export default NewEmployeeOkButton;
