import React from 'react';
import FindAndAddEmployees from './FindAndAddEmployees';
import EmployeesList from './EmployeesList';
import TimeGaps from './TimeGaps';
import BackButton from '../buttons/BackButton';
import FreeTimeGapsList from './FreeTimeGapsList';
import SelectDate from './SelectDate';
import { useState } from 'react';
import { formatISO9075 } from 'date-fns';
import { AppContext } from '../App';
import { useContext } from 'react';

const FreeTimeGaps = () => {
    const { allEmployees, schedule } = useContext(AppContext);

    const [employees, setEmployees] = useState([]);
    const [freeTimeGaps, setFreeTimeGaps] = useState([]);
    const [currentDate, setCurrentDate] = useState(
        formatISO9075(Date.now(), { representation: 'date' })
    );
    return (
        <div className='App'>
            <h2 style={{ textAlign: 'center', margin: '0.9rem' }}>
                Free Time Gaps
            </h2>
            <FindAndAddEmployees
                allEmployees={allEmployees}
                employees={employees}
                setEmployees={setEmployees}
            />
            <SelectDate
                currentDate={currentDate}
                setCurrentDate={setCurrentDate}
            />
            <EmployeesList employees={employees} setEmployees={setEmployees} />
            <TimeGaps
                employees={employees}
                schedule={schedule}
                setFreeTimeGaps={setFreeTimeGaps}
                currentDate={currentDate}
            />
            <FreeTimeGapsList freeTimeGaps={freeTimeGaps} />
            <BackButton />
        </div>
    );
};

export default FreeTimeGaps;
