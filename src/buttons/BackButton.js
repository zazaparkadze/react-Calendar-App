import React from 'react';
import { useNavigate } from 'react-router-dom';

const BackButton = ({
    startTime,
    setStartTime,
    setDuration,
    setSubject,
    setNewAppointment,
}) => {
    const navigate = useNavigate();
    return (
        <div className='backButtonPosition'>
            <button
                className='backButtonShape'
                onClick={
                    startTime
                        ? () => {
                              navigate(-1);
                              setDuration(1);
                              setSubject('');
                              setNewAppointment({
                                  id: 0,
                                  startTime: '',
                                  endTime: '',
                                  subject: '',
                              });
                              setStartTime({
                                  ...startTime,
                                  year: new Date().getFullYear(),
                                  month: new Date().getMonth(),
                                  day: new Date().getDate(),
                                  hours: new Date().getHours(),
                                  minutes: new Date().getMinutes(),
                                  seconds: 0,
                                  milliseconds: 0,
                              });
                          }
                        : () => {
                              navigate(-1);
                          }
                }
            >
                Back
            </button>
        </div>
    );
};

BackButton.defaultProps = {
    startTime: undefined,
    setStartTime: undefined,
    setDuration: undefined,
    setSubject: undefined,
    setNewAppointment: undefined,
};

export default BackButton;
