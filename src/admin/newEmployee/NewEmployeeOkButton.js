import React from 'react';
import handleNewEmployee from './handleNewEmployee';

const NewEmployeeOkButton = ({
    newEmployee,
    setNewEmployee,
    allEmployees,
    setAllEmployees,
    schedule,
    setSchedule,
}) => {
    return (
        <button
            className='confirm'
            onClick={() => {
                newEmployee.id !== 0 &&
                    newEmployee.employeeID !== 0 &&
                    newEmployee.firstname !== '' &&
                    newEmployee.lastname !== '' &&
                    handleNewEmployee(
                        newEmployee,
                        setNewEmployee,
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
