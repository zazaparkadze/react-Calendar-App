import React from 'react';
import handleNewEmployee from './handleNewEmployee';
import DataContext from '../../Context/DataContext';
import { AppContext } from '../../App';
import { useContext } from 'react';

const NewEmployeeOkButton = () => {
    const { newEmployee, setNewEmployee } = useContext(DataContext);
    const { allEmployees, setAllEmployees, schedule, setSchedule } =
        useContext(AppContext);
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
