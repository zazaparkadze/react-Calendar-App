import React from 'react';

const EmployeeID = ({ setEmployeeID, employeeID, allEmployees }) => {
    return (
        <>
            <h2 style={{ margin: '1.2rem' }}>AddNewAppointment/Vacation</h2>
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
                    {allEmployees.filter(
                        (emp) => emp.employeeID === Number(employeeID)
                    ).length
                        ? allEmployees.filter(
                              (emp) => emp.employeeID === Number(employeeID)
                          )[0].firstname +
                          ' ' +
                          allEmployees.filter(
                              (emp) => emp.employeeID === Number(employeeID)
                          )[0].lastname
                        : 'Stranger'}
                </p>
            ) : null}
        </>
    );
};

export default EmployeeID;
