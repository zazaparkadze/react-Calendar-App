import React from 'react';
import { years } from '../config/datesTimesInfo';
const Years = ({ startTime, setStartTime }) => {
    return (
        <>
            <label>Year</label>
            <select
                name='years'
                id='years'
                value={startTime.year}
                onChange={(e) => {
                    setStartTime({
                        ...startTime,
                        year: e.target.value,
                    });
                }}
            >
                {years.map((e) => (
                    <option value={e} key={e}>
                        {e}
                    </option>
                ))}
            </select>
        </>
    );
};

export default Years;
