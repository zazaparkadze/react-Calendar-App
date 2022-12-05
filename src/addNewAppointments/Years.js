import React from 'react';
import { years } from '../config/datesTimesInfo';
import DataContext from '../Context/DataContext';
import { useContext } from 'react';

const Years = () => {
    const { startTime, setStartTime } = useContext(DataContext);
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
