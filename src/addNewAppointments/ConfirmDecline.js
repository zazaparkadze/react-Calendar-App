import React from 'react';
import OkButton from '../buttons/OkButton';
import CancelButton from '../buttons/CancelButton';

const ConfirmDecline = ({
    startTime,
    setStartTime,
    setDuration,
    employeeID,
    newAppointment,
    setNewAppointment,
    schedule,
    allEmployees,
    setSubject,
    duration,
    API_URI_schedule,
    setFetchError,
    vac,
    setVac,
}) => {
    return (
        <div>
            <OkButton
                startTime={startTime}
                setStartTime={setStartTime}
                setDuration={setDuration}
                employeeID={employeeID}
                newAppointment={newAppointment}
                schedule={schedule}
                allEmployees={allEmployees}
                duration={duration}
                API_URI_schedule={API_URI_schedule}
                setFetchError={setFetchError}
                vac={vac}
                setVac={setVac}
                setNewAppointment={setNewAppointment}
                setSubject={setSubject}
            />
            <CancelButton
                startTime={startTime}
                setStartTime={setStartTime}
                setDuration={setDuration}
                setSubject={setSubject}
                setNewAppointment={setNewAppointment}
            />
        </div>
    );
};

export default ConfirmDecline;
