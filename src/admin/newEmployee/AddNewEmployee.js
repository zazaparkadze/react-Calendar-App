import React from 'react';
import { useState } from 'react';
import EmployeeForm from './EmployeeForm';

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
        newEmployeeID: 0,
    });
    return (
        <div>
            <EmployeeForm
                newEmployee={newEmployee}
                setNewEmployee={setNewEmployee}
                allEmployees={allEmployees}
                setAllEmployees={setAllEmployees}
                schedule={schedule}
                setSchedule={setSchedule}
            />
        </div>
    );
};

export default AddNewEmployee;
