import React from 'react';
import { hours } from '../config/datesTimesInfo';
import DataContext from '../Context/DataContext';
import { useContext } from 'react';
const Hours = () => {
    const { setStartTime, startTime } = useContext(DataContext);
    return (
        <>
            <label>Choose Start Date and Time</label>
            <label>Hour</label>
            <select
                name='hour'
                id='hour'
                value={startTime.hours}
                onChange={(e) =>
                    setStartTime({
                        ...startTime,
                        hours: e.target.value,
                    })
                }
            >
                {hours.map((e) => (
                    <option key={e} value={e}>
                        {e}
                    </option>
                ))}
            </select>
        </>
    );
};

export default Hours;
