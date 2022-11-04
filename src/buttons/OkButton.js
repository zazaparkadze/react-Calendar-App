import React from 'react';
import updateSchedule from './updateSchedule';

const OkButton = ({
    employeeID,
    newAppointment,
    schedule,
    allEmployees,
    setStartTime,
    setDuration,
    startTime,
    duration,
    API_URI_schedule,
    setFetchError,
}) => {
    return (
        <button
            className='confirm'
            onClick={() =>
                updateSchedule(
                    employeeID,
                    newAppointment,
                    schedule,
                    allEmployees,
                    setStartTime,
                    setDuration,
                    startTime,
                    duration,
                    API_URI_schedule,
                    setFetchError
                )
            }
        >
            Confirm
        </button>
    );
};

export default OkButton;
