import React from 'react';
import ConfirmDeclineEmployee from './ConfirmDeclineEmployee';
const EmployeeForm = ({
    newEmployee,
    setNewEmployee,
    allEmployees,
    setAllEmployees,
    schedule,
    setSchedule,
}) => {
    return (
        <div>
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
                                id: e.target.value,
                            }) // check!!
                    }
                />
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
                    type='text'
                    value={newEmployee.newEmployeeID}
                    onChange={(e) =>
                        setNewEmployee({
                            ...newEmployee,
                            newEmployeeID: e.target.value, // check!!
                        })
                    }
                />
                <ConfirmDeclineEmployee
                    allEmployees={allEmployees}
                    setAllEmployees={setAllEmployees}
                    newEmployee={newEmployee}
                    setNewEmployee={setNewEmployee}
                    schedule={schedule}
                    setSchedule={setSchedule}
                />
            </form>
        </div>
    );
};

export default EmployeeForm;
