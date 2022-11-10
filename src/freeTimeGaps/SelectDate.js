import React from 'react';
import { useState } from 'react';

const SelectDate = () => {
    // const [currentDate, setCurrentDate] = useState('');
    // console.log(currentDate);
    return (
        <div>
            <label>Selected Date</label>
            <input
                type='Date'
                //           onChange={(e) => setCurrentDate(e.target.value)}
            />
            <small style={{ fontSize: '10px' }}>
                working on it, but not necessary
            </small>
        </div>
    );
};

export default SelectDate;
