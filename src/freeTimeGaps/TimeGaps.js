import React from 'react';
import { format } from 'date-fns';
import handleFreeIntervals from './handleFreeIntervals';

const TimeGaps = ({ schedule, employees, setFreeTimeGaps }) => {
    const showFreeTimeGaps = () => {
        const result = handleFreeIntervals(schedule, employees);
        //
        result.forEach((el) => {
            el.startTime = format(
                new Date(el.startTime),
                'yyyy-MM-dd HH:mm:ss'
            );
            el.endTime = format(new Date(el.endTime), 'yyyy-MM-dd HH:mm:ss');
        });
        //console.log(result);
        setFreeTimeGaps(result);
    };
    return (
        <div style={{ textAlign: 'center' }}>
            <h2 style={{ textAlign: 'center', margin: '0.9rem' }}>Time Gaps</h2>
            {employees.length === 1 ? (
                <button
                    style={{
                        color: 'green',
                        height: '2.50rem',
                        padding: '0.15rem',
                        width: '80%',
                        fontSize: '0.8rem',
                        boxShadow: '2px 2px 4px',
                    }}
                    onClick={() => showFreeTimeGaps()}
                >
                    Free time gap with You of selected employee
                </button>
            ) : employees.length > 1 ? (
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
            ) : null}
        </div>
    );
};

export default TimeGaps;
