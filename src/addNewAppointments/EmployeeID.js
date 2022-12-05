import React from 'react';
import DataContext from '../Context/DataContext';
import { AppContext } from '../App';
import { useContext } from 'react';

const EmployeeID = () => {
    const { setEmployeeID, employeeID } = useContext(DataContext);
    const { allEmployees } = useContext(AppContext);
    const foundEmployee = allEmployees.filter(
        (emp) => emp.employeeID === Number(employeeID)
    );
    return (
        <>
            <h2 style={{ margin: '1.2rem' }}>Add New Appointment</h2>
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
