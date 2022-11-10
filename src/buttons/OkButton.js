import React from 'react';
import updateSchedule from './updateSchedule';

const OkButton = ({
    employeeID,
    newAppointment,
    setNewAppointment,
    setSubject,
    schedule,
    allEmployees,
    setStartTime,
    setDuration,
    startTime,
    duration,
    API_URI_schedule,
    setFetchError,
    vac,
    setVac,
}) => {
    return (
        <button
            className='confirm'
            onClick={() => {
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
                    setFetchError,
                    vac,
                    setVac
                );
                setStartTime({
                    ...startTime,
                    year: new Date().getFullYear(),
                    month: new Date().getMonth(),
                    day: new Date().getDate(),
                    hours: new Date().getHours(),
                    minutes: new Date().getMinutes(),
                    seconds: 0,
                    miliseconds: 0,
                });
                setDuration(5);
                setSubject('');
                setNewAppointment({});
            }}
        >
            Confirm
        </button>
    );
};

export default OkButton;
