import React from 'react';
import { durationsDays } from '../config/datesTimesInfo';
import DataContext from '../Context/DataContext';
import { useContext } from 'react';
const DurationDays = () => {
    const { durationDay, setDurationDay } = useContext(DataContext);
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
