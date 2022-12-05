import React from 'react';
import { minutes } from '../config/datesTimesInfo';
import DataContext from '../Context/DataContext';
import { useContext } from 'react';

const Minutes = () => {
    const { startTime, setStartTime } = useContext(DataContext);
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
