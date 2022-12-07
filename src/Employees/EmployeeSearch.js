import React from 'react';
import DataContext from '../Context/DataContext';
import { AppContext } from '../App';
import { useContext } from 'react';

const EmployeeSearch = ({ title }) => {
    const { setEmployeeID, employeeID } = useContext(DataContext);
    const { allEmployees } = useContext(AppContext);
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
            {employeeID && (
                <p style={{ color: 'red' }}>
                    {' '}
                    You are Deleting All Entris for{' '}
                    {foundEmployee.length
                        ? foundEmployee[0].firstname +
                          ' ' +
                          foundEmployee[0].lastname
                        : '.....'}
                </p>
            )}
        </>
    );
};

export default EmployeeSearch;
