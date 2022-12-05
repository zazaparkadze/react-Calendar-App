import React from 'react';
import { AppContext } from '../App';
import { useContext } from 'react';

const SearchAppointmentName = () => {
    const { searchAppointmentName, setSearchAppointmentName } =
        useContext(AppContext);
    return (
        <form className='searchAppointment'>
            <label htmlFor='searchappointment'></label>
            <input
                id='searchAppointmentName'
                name='searchAppointmentName'
                type='text'
                value={searchAppointmentName}
                placeholder='Name'
                onChange={(e) => {
                    setSearchAppointmentName(e.target.value);
                }}
            />
        </form>
    );
};

export default SearchAppointmentName;
