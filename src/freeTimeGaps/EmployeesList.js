import React from 'react';

const EmployeesList = ({ employees, setEmployees }) => {
    const removeFromList = (id) => {
        const updatedList = employees.filter((emp) => emp.id !== id);
        setEmployees(updatedList);
    };
    return (
        <div>
            <h2 style={{ textAlign: 'center', margin: '0.9rem' }}>
                Selected Employees List
            </h2>
            {employees.length ? (
                <ul className='selectedEmployees'>
                    {employees.map((emp) => (
                        <li key={emp.id}>
                            {emp.lastname} {emp.firstname} {emp.employeeID}{' '}
                            <button onClick={() => removeFromList(emp.id)}>
                                -
                            </button>
                        </li>
                    ))}
                </ul>
            ) : (
                <p style={{ textAlign: 'center', color: 'red' }}>
                    {' '}
                    No One Selected{' '}
                </p>
            )}
        </div>
    );
};

export default EmployeesList;
