import React from 'react';
import { format } from 'date-fns';
import handleFreeIntervals from './handleFreeIntervals';

//
const TimeGaps = ({ schedule, employees, setFreeTimeGaps, currentDate }) => {
    const showFreeTimeGaps = () => {
        const result = handleFreeIntervals(schedule, employees, currentDate);
        //
        result.forEach((el) => {
            el.startTime = format(
                new Date(el.startTime),
                'HH:mm:ss dd-MM-yyyy'
            );
            el.endTime = format(new Date(el.endTime), 'HH:mm:ss dd-MM-yyyy');
        });
        setFreeTimeGaps(result);
    };
    return (
        <div style={{ textAlign: 'center' }}>
            <h2 style={{ textAlign: 'center', margin: '0.9rem' }}>Time Gaps</h2>
            {employees.length > 1 && (
                <button
                    style={{
                        color: 'green',
                        height: '2.50rem',
                        padding: '0.15rem',
                        width: '90%',
                        fontSize: '0.8rem',
                        boxShadow: '2px 2px 4px',
                        justifyContent: 'center',
                    }}
                    onClick={() => showFreeTimeGaps()}
                >
                    Click the button to see free time gaps of selected employees
                </button>
            )}
        </div>
    );
};

export default TimeGaps;
