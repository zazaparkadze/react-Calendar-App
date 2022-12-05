import React from 'react';
import { days } from '../config/datesTimesInfo';
import DataContext from '../Context/DataContext';
import { useContext } from 'react';

const Days = () => {
    const { startTime, setStartTime } = useContext(DataContext);
    return (
        <>
            <label htmlFor='day'>Day</label>
            <select
                name='day'
                id='day'
                value={startTime.day}
                onChange={(e) =>
                    setStartTime({
                        ...startTime,
                        day: e.target.value,
                    })
                }
            >
                {days.map((e) => (
                    <option value={e} key={e}>
                        {e}
                    </option>
                ))}
            </select>
        </>
    );
};

export default Days;
