import React from 'react';
import FindAndAddEmployees from './FindAndAddEmployees';
import EmployeesList from './EmployeesList';
import TimeGaps from './TimeGaps';
import BackButton from '../buttons/BackButton';
import FreeTimeGapsList from './FreeTimeGapsList';
import SelectDate from './SelectDate';
import { useState } from 'react';

const FreeTimeGaps = ({
    allEmployees,
    schedule,
    startTime,
    setStartTime,
    setDuration,
    setSubject,
    setNewAppointment,
}) => {
    const [employees, setEmployees] = useState([]);
    const [freeTimeGaps, setFreeTimeGaps] = useState([]);
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
            <SelectDate />
            <EmployeesList employees={employees} setEmployees={setEmployees} />
            <TimeGaps
                employees={employees}
                schedule={schedule}
                setFreeTimeGaps={setFreeTimeGaps}
            />
            <FreeTimeGapsList freeTimeGaps={freeTimeGaps} />
            <BackButton
                startTime={startTime}
                setStartTime={setStartTime}
                setDuration={setDuration}
                setSubject={setSubject}
                setNewAppointment={setNewAppointment}
            />
        </div>
    );
};

export default FreeTimeGaps;
