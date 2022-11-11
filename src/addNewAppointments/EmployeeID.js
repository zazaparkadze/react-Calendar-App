import React from 'react';

const EmployeeID = ({ setEmployeeID, employeeID, allEmployees, title }) => {
    const foundEmployee = allEmployees.filter(
        (emp) => emp.employeeID === Number(employeeID)
    );
    return (
        <>
            <h2 style={{ margin: '1.2rem' }}>{title}</h2>
            <label>Your employee ID:</label>
            <input
                id='employeeID'
                type='text'
                placeholder='Type employeeID'
                value={employeeID}
                onChange={(e) => setEmployeeID(e.target.value)}
            />
            {employeeID ? (
                <p style={{ color: 'green' }}>
                    Hello{' '}
                    {foundEmployee.length
                        ? foundEmployee[0].firstname +
                          ' ' +
                          foundEmployee[0].lastname
                        : 'Stranger'}
                </p>
            ) : null}
        </>
    );
};

export default EmployeeID;
