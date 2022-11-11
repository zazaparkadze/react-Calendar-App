import React from 'react';

import BackButton from '../buttons/BackButton';

const Announcements = ({
    startTime,
    setStartTime,
    setDuration,
    setSubject,
    setNewAppointment,
}) => {
    return (
        <>
            <ul className='App'>
                <h2>Announcements</h2>
                <li>Special Announcement</li>
                <li>Corona Virus Update</li>
                <li>Corporative Party</li>
                <li>Blog</li>
                <BackButton
                    startTime={startTime}
                    setStartTime={setStartTime}
                    setDuration={setDuration}
                    setSubject={setSubject}
                    setNewAppointment={setNewAppointment}
                />
            </ul>
        </>
    );
};

export default Announcements;
