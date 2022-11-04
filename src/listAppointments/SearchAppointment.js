import React from 'react';

const SearchAppointment = ({ searchAppointment, setSearchAppointment }) => {
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
                onChange={(e) => setSearchAppointment(e.target.value)}
            />
        </form>
    );
};

export default SearchAppointment;
