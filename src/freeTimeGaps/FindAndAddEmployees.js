import React from 'react';
import EmployeeLine from './EmployeeLine';

const FindAndAddEmployees = ({ employees, setEmployees, allEmployees }) => {
    const addEmployee = (id) => {
        const selectedEmployee = allEmployees.find((emp) => emp.id === id);
        !employees.map((emp) => emp.id === id).includes(true)
            ? setEmployees([...employees, selectedEmployee])
            : setEmployees([...employees]);
    };
    return (
        <ul>
            {allEmployees.map((emp) => (
                <EmployeeLine
                    className='app applicationList'
                    key={emp.id}
                    emp={emp}
                    addEmployee={addEmployee}
                />
            ))}
        </ul>
    );
};

export default FindAndAddEmployees;
