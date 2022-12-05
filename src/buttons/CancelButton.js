import React from 'react';
import DataContext from '../Context/DataContext';
import { useContext } from 'react';

const CancelButton = () => {
    const {
        setStartTime,
        startTime,
        setDuration,
        setSubject,
        setNewAppointment,
    } = useContext(DataContext);
    return (
        <button
            className='makeChange'
            onClick={() => {
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
                setDuration(1);
                setSubject('');
                setNewAppointment({
                    id: 0,
                    startTime: '',
                    endTime: '',
                    subject: '',
                });
            }}
        >
            Make Change
        </button>
    );
};

export default CancelButton;
