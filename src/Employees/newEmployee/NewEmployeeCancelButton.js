import React from 'react';
import DataContext from '../../Context/DataContext';
import { useContext } from 'react';

const NewEmployeeCancelButton = () => {
    const { setNewEmployee } = useContext(DataContext);
    return (
        <button
            className='makeChange'
            onClick={() => {
                setNewEmployee({
                    id: 0,
                    firstname: '',
                    lastname: '',
                    employeeID: 0,
                });
            }}
        >
            Make Change
        </button>
    );
};

export default NewEmployeeCancelButton;
