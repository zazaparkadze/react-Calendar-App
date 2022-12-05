import React from 'react';
import DataContext from '../Context/DataContext';
import { useContext } from 'react';

const SearchAppointment = () => {
    const { searchAppointment, setSearchAppointment } = useContext(DataContext);
    return (
        <form
            className='searchAppointment'
            onSubmit={(e) => e.preventDefault()}
        >
            <label htmlFor='searchAppointment'></label>
            <input
                id='searchAppointment'
                name='searchAppointment'
                type='text'
                value={searchAppointment}
                placeholder='Date, Subject'
                onChange={(e) => {
                    setSearchAppointment(e.target.value);
                }}
            />
        </form>
    );
};

export default SearchAppointment;
