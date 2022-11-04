import React from 'react';

const SearchAppointmentName = ({
    searchAppointmentName,
    setSearchAppointmentName,
}) => {
    return (
        <form
            className='searchAppointment'
            onSubmit={(e) => e.preventDefault()}
        >
            <label htmlFor='searchappointment'></label>
            <input
                id='searchAppointmentName'
                name='searchAppointmentName'
                type='text'
                value={searchAppointmentName}
                placeholder='Name'
                onChange={(e) => setSearchAppointmentName(e.target.value)}
            />
        </form>
    );
};

export default SearchAppointmentName;
