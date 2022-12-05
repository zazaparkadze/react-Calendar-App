import React from 'react';
import updateSchedule from './updateSchedule';
import DataContext from '../Context/DataContext';
import { AppContext } from '../App';
import { useContext } from 'react';

const OkButton = () => {
    const {
        employeeID,
        newAppointment,
        setNewAppointment,
        setSubject,
        setStartTime,
        setDuration,
        startTime,
        duration,
        vac,
        setVac,
    } = useContext(DataContext);
    const { schedule, setFetchError, allEmployees, API_URI_schedule } =
        useContext(AppContext);
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
                setNewAppointment({
                    id: 0,
                    startTime: '',
                    endTime: '',
                    subject: '',
                });
            }}
        >
            Confirm
        </button>
    );
};

export default OkButton;
