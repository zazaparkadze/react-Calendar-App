import React from 'react';
import { useState } from 'react';
import BackButton from '../buttons/BackButton';
import AppList from './AppList';
import SearchAppointment from './SearchAppointment';
import SearchAppointmentName from './SearchAppointmentName';
import { parseISO, format } from 'date-fns';

const ListAppointments = ({
    schedule,
    setSchedule,
    searchAppointmentName,
    setSearchAppointmentName,
}) => {
    const [searchAppointment, setSearchAppointment] = useState('');
    return (
        <>
            <p>List of Appointments</p>
            <SearchAppointmentName
                searchAppointmentName={searchAppointmentName}
                setSearchAppointmentName={setSearchAppointmentName}
            />
            <SearchAppointment
                searchAppointment={searchAppointment}
                setSearchAppointment={setSearchAppointment}
            />

            <ul className='appointmentsList'>
                {schedule.map((sch) => (
                    <li key={sch.name}>
                        {sch.name}'s appointments:{' '}
                        <AppList
                            sch={sch.meetings.filter(
                                (el) =>
                                    sch.meetings.length &&
                                    (el.subject
                                        ? el.subject
                                              .toLowerCase()
                                              .includes(
                                                  searchAppointment.toLowerCase()
                                              )
                                        : '' ||
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
                                              ))
                            )}
                            schedule={schedule}
                            setSchedule={setSchedule}
                            schID={sch.id}
                        />
                    </li>
                ))}
            </ul>
            <BackButton />
        </>
    );
};

export default ListAppointments;
