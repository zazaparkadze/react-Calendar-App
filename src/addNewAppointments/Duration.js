import React from 'react';
import { durations } from '../config/datesTimesInfo';
import DataContext from '../Context/DataContext';
import { useContext } from 'react';

const Duration = () => {
    const { setDuration, duration } = useContext(DataContext);
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
