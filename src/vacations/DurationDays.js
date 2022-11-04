import React from 'react';
import { durationsDays } from '../config/datesTimesInfo';

const DurationDays = ({ durationDay, setDurationDay }) => {
    return (
        <>
            <label>Duration (Days)</label>
            <select
                name='durationDays'
                id='durationDays'
                value={durationDay}
                onChange={(e) => {
                    setDurationDay(e.target.value);
                }}
            >
                {durationsDays.map((e) => (
                    <option value={e} key={e}>
                        {e}
                    </option>
                ))}
            </select>
        </>
    );
};

export default DurationDays;
