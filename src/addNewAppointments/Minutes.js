import React from 'react';
import { minutes } from '../config/datesTimesInfo';

const Minutes = ({ startTime, setStartTime }) => {
    return (
        <>
            <label>Minutes:</label>
            <select
                name='minutes'
                id='minutes'
                value={startTime.minutes}
                onChange={(e) =>
                    setStartTime({
                        ...startTime,
                        minutes: e.target.value,
                    })
                }
            >
                {minutes.map((e) => (
                    <option key={e} value={e}>
                        {e}
                    </option>
                ))}
            </select>
        </>
    );
};

export default Minutes;
