import React from 'react';
import { useState } from 'react';
import ConfirmDeclineEmployee from './ConfirmDeclineEmployee';

const AddNewEmployee = ({
    allEmployees,
    setAllEmployees,
    schedule,
    setSchedule,
}) => {
    const [newEmployee, setNewEmployee] = useState({
        id: 0,
        firstname: '',
        lastname: '',
        employeeID: 0,
    });

    return (
        <form className='App' onSubmit={(e) => e.preventDefault()}>
            <h3>AddNewEmployee</h3>
            <label>ID</label>
            <input
                id='ID'
                required
                value={newEmployee.id}
                onChange={
                    (e) =>
                        setNewEmployee({
                            ...newEmployee,
                            id: Number(e.target.value),
                        }) // check!!
                }
            />
            <p style={{ color: 'green' }}>
                {' '}
                rec: {allEmployees[allEmployees.length - 1].id + 1}{' '}
            </p>
            <label>First Name</label>
            <input
                id='firstname'
                required
                type='text'
                value={newEmployee.firstname}
                onChange={(e) =>
                    setNewEmployee({
                        ...newEmployee,
                        firstname: e.target.value,
                    })
                }
            />
            <label>Last Name</label>
            <input
                id='lastname'
                required
                type='text'
                value={newEmployee.lastname}
                onChange={(e) =>
                    setNewEmployee({
                        ...newEmployee,
                        lastname: e.target.value,
                    })
                }
            />
            <label>EmployeeID</label>
            <input
                id='EmployeeID'
                required
                value={newEmployee.employeeID}
                onChange={(e) => {
                    setNewEmployee({
                        ...newEmployee,
                        employeeID: Number(e.target.value), // check!!
                    });
                }}
            />
            <p style={{ color: 'green' }}>
                {' '}
                rec: {allEmployees[allEmployees.length - 1].employeeID + 1}{' '}
            </p>
            <ConfirmDeclineEmployee
                allEmployees={allEmployees}
                setAllEmployees={setAllEmployees}
                newEmployee={newEmployee}
                setNewEmployee={setNewEmployee}
                schedule={schedule}
                setSchedule={setSchedule}
            />
        </form>
    );
};

export default AddNewEmployee;
