import React from 'react';
import { FaPlus } from 'react-icons/fa';

const EmployeeLine = ({ emp, addEmployee }) => {
    return (
        <ul className='appointmentsList'>
            <li onDoubleClick={() => addEmployee(emp.id)}>
                {emp.lastname}, {emp.firstname}{' '}
                <FaPlus
                    style={{
                        color: 'green',
                        boxShadow: '2px 2px 5px',
                    }}
                    type='button'
                    onClick={() => addEmployee(emp.id)}
                />
            </li>
        </ul>
    );
};

export default EmployeeLine;
