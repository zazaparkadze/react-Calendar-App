import React from 'react';
import ConfirmDeclineEmployee from './ConfirmDeclineEmployee';
import { useNavigate } from 'react-router-dom';
import DataContext from '../Context/DataContext';
import { AppContext } from '../App';
import { useContext } from 'react';

const AddNewEmployee = () => {
    const { newEmployee, setNewEmployee } = useContext(DataContext);
    const { allEmployees } = useContext(AppContext);

    const navigate = useNavigate();
    return (
        <form className='App' onSubmit={(e) => e.preventDefault()}>
            <h3>AddNewEmployee</h3>
            <label>ID</label>
            <input
                id='ID'
                required
                value={newEmployee.id}
                onChange={(e) =>
                    setNewEmployee({
                        ...newEmployee,
                        id: isNaN(Number(e.target.value))
                            ? 0
                            : Number(e.target.value),
                    })
                }
            />
            <p style={{ color: 'green' }}>
                {' '}
                rec:{' '}
                {allEmployees.length
                    ? allEmployees.sort((a, b) => a.id - b.id)[
                          allEmployees.length - 1
                      ].id + 1
                    : 1}{' '}
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
                        firstname:
                            e.target.value.match(/[\W]|\d/g) === null
                                ? e.target.value
                                : '',
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
                        lastname:
                            e.target.value.match(/[\W]|\d/g) === null
                                ? e.target.value
                                : '',
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
                        employeeID: isNaN(Number(e.target.value))
                            ? 0
                            : Number(e.target.value),
                    });
                }}
            />
            <p style={{ color: 'green' }}>
                {' '}
                rec:{' '}
                {allEmployees.length
                    ? allEmployees.sort((a, b) => a.id - b.id)[
                          allEmployees.length - 1
                      ].employeeID + 1
                    : 1720}{' '}
            </p>
            <ConfirmDeclineEmployee
                newEmployee={newEmployee}
                setNewEmployee={setNewEmployee}
            />
            <button className='backButtonShape' onClick={() => navigate(-1)}>
                Back
            </button>
        </form>
    );
};

export default AddNewEmployee;
