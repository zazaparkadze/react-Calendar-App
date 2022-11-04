import React from 'react';
import { months } from '../config/datesTimesInfo';

const Months = ({ startTime, setStartTime }) => {
    return (
        <>
            <label>Month</label>
            <select
                name='month'
                id='month'
                value={months.find((e) => e.includes(startTime.month))}
                onChange={(e) => {
                    setStartTime({
                        ...startTime,
                        month: e.target.value.replace(/\D/g, ''),
                    });
                }}
            >
                {months.map((e) => (
                    <option value={e} key={e}>
                        {e.replace(/\d/g, '')}
                    </option>
                ))}
            </select>
        </>
    );
};

export default Months;
