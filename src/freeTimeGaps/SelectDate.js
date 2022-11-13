import React from 'react';

const SelectDate = ({ currentDate, setCurrentDate }) => {
    return (
        <div>
            <label>Select Date</label>
            <input
                type='Date'
                value={currentDate}
                onChange={(e) => setCurrentDate(e.target.value)}
            />
        </div>
    );
};

export default SelectDate;
