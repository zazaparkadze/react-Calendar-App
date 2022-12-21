import React from 'react';
import BackButton from '../buttons/BackButton';
import AppList from './AppList';
import SearchAppointment from './SearchAppointment';
import SearchAppointmentName from './SearchAppointmentName';
import { parseISO, format } from 'date-fns';
import DataContext from '../Context/DataContext';

import { useContext } from 'react';

const ListAppointments = ({ schedule, setSchedule }) => {
    const { searchAppointment } = useContext(DataContext);
    return (
        <>
            <p>List of Appointments</p>
            <SearchAppointmentName />
            <SearchAppointment />
            <ul className='appointmentsList'>
                {schedule.map((scheduleNameEntry) => (
                    <li key={scheduleNameEntry.name}>
                        {!scheduleNameEntry.meetings.length
                            ? null
                            : `${scheduleNameEntry.name}'s appointments:`}
                        <AppList
                            scheduleNameEntry={{
                                ...scheduleNameEntry,
                                meetings: scheduleNameEntry.meetings.filter(
                                    (el) =>
                                        el.subject
                                            .toLowerCase()
                                            .includes(
                                                searchAppointment.toLowerCase()
                                            ) ||
                                        format(
                                            parseISO(el.startTime),
                                            'HH:mm:ss  dd/MM/yyyy'
                                        )
                                            .toLowerCase()
                                            .startsWith(
                                                searchAppointment.toLowerCase()
                                            ) ||
                                        format(
                                            parseISO(el.endTime),
                                            'HH:mm:ss  dd/MM/yyyy'
                                        )
                                            .toLowerCase()
                                            .startsWith(
                                                searchAppointment.toLowerCase()
                                            )
                                ),
                            }}
                            schedule={schedule}
                            setSchedule={setSchedule}
                            schID={scheduleNameEntry.id}
                        />
                    </li>
                ))}
            </ul>
            <BackButton />
        </>
    );
};

export default ListAppointments;
