import React from 'react';
import { parseISO, format } from 'date-fns';
import { FaMeetup } from 'react-icons/fa';
import { FaTrashAlt } from 'react-icons/fa';
import apiRequest from '../config/apiRequest';
import { API_URI_schedule } from '../config/API_URI_DB';

const AppList = ({ scheduleNameEntry, schedule, setSchedule, schID }) => {
    //console.log(scheduleNameEntry);
    const handleDeleteAppointment = async (meetingid) => {
        const filteredAppointments = scheduleNameEntry.meetings.filter(
            (e) => e.id !== Number(meetingid)
        );
        const foundNameEntry = schedule.find((e) => e.id === schID);
        const filteredSchedule = schedule.filter((e) => e.id !== schID);
        const updated = { ...foundNameEntry, meetings: filteredAppointments };
        const updatedSchedule = [...filteredSchedule, updated].sort(
            (a, b) => a.id - b.id
        );
        setSchedule(updatedSchedule); //

        const updateOptions = {
            method: 'DELETE',
            headers: {
                Content_type: 'application/json',
                Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
            },
        };

        await apiRequest(
            `${API_URI_schedule}/${schID}_${meetingid}`,
            updateOptions
        );
    };
    return (
        <ol>
            {
                !scheduleNameEntry.meetings.length &&
                    null /*  <p style={{ color: 'red' }}> No Appointments</p> */
            }
            {scheduleNameEntry.meetings.map((meeting) => (
                <li
                    className='appointmentsList'
                    key={meeting.id}
                    style={{
                        color: 'grey',
                    }}
                >
                    {format(
                        parseISO(meeting.startTime),
                        'HH:mm:ss  dd-MM-yyyy'
                    )}{' '}
                    <FaMeetup />{' '}
                    {format(parseISO(meeting.endTime), 'HH:mm:ss  dd-MM-yyyy')}{' '}
                    {'  '}
                    {<br />}
                    subject: {meeting.subject}
                    <FaTrashAlt
                        type='button'
                        onClick={() => handleDeleteAppointment(meeting.id)}
                    />
                </li>
            ))}
        </ol>
    );
};

export default AppList;
