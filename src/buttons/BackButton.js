import React from 'react';
import { useNavigate } from 'react-router-dom';

const BackButton = ({ startTime, setStartTime, setDuration, setSubject }) => {
    const navigate = useNavigate();
    return (
        <div className='backButtonPosition'>
            <button
                className='backButtonShape'
                onClick={
                    startTime
                        ? () => {
                              navigate(-1);
                              setDuration(0);
                              setSubject('');
                              setStartTime({
                                  ...startTime,
                                  year: 2022,
                                  month: 0,
                                  day: 1,
                                  hours: 0,
                                  minutes: 0,
                                  seconds: 0,
                                  miliseconds: 0,
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
};

export default BackButton;
