import React from 'react';
import { parseISO, format } from 'date-fns';
import { FaMeetup } from 'react-icons/fa';

const AppList = ({ sch }) => {
    let myColors = ['gray', 'black'];
    console.log(sch);
    return (
        <ol>
            {!sch.length && <p style={{ color: 'red' }}> No Appointment</p>}
            {sch.map((meeting) => (
                <li
                    className='appointmentsList'
                    key={meeting.id}
                    style={{
                        color: meeting.id % 2 === 0 ? myColors[0] : myColors[1],
                    }}
                >
                    {format(
                        parseISO(meeting.startTime),
                        'HH:mm:ss  dd/MM/yyyy'
                    )}{' '}
                    <FaMeetup />{' '}
                    {format(parseISO(meeting.endTime), 'HH:mm:ss  dd/MM/yyyy')}{' '}
                    {'  '}
                    {<br />}
                    subject: {meeting.subject}
                </li>
            ))}
        </ol>
    );
};

export default AppList;

/* 
const AppList = ({ sch, searchAppointment }) => {
    return (
        <ol>
            {sch.meetings.map((meeting) => (
                <li className='appointmentsList' key={meeting.id}>
                    {format(
                        parseISO(meeting.startTime),
                        'HH:mm:ss  dd/MM/yyyy'
                    )}{' '}
                    <FaMeetup />{' '}
                    {format(parseISO(meeting.endTime), 'HH:mm:ss  dd/MM/yyyy')}{' '}
                    {'  '}
                    {<br />}
                    subject: {meeting.subject}
                </li>
            ))}
        </ol>
    );
};

export default AppList;
 */
