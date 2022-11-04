import React from 'react';
import { durations } from '../config/datesTimesInfo';

const Duration = ({ setDuration, duration }) => {
    return (
        <>
            <label>Duration</label>
            <select
                name='duration'
                id='duration'
                value={duration}
                onChange={(e) => {
                    setDuration(e.target.value);
                }}
            >
                {durations.map((e) => (
                    <option value={e} key={e}>
                        {e}
                    </option>
                ))}
            </select>
        </>
    );
};

export default Duration;
