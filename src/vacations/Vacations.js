import React from 'react';
import BackButton from '../buttons/BackButton';
import EmployeeID from '../Employees/EmployeeID';
import Days from '../addNewAppointments/Days';
import Months from '../addNewAppointments/Months';
import Years from '../addNewAppointments/Years';
import DurationDays from './DurationDays';
import ConfirmMessage from '../addNewAppointments/ConfirmMessage';
import ConfirmDecline from '../addNewAppointments/ConfirmDecline';
import { FaPlus } from 'react-icons/fa';
import { format, add, startOfDay, endOfDay } from 'date-fns';
import DataContext from '../Context/DataContext';
import { useContext } from 'react';
import { AppContext } from '../App';

const Vacations = () => {
    const {
        employeeID,
        startTime,
        durationDay,
        setNewAppointment,
        setDurationDay,
        newAppointment,
        setVac,
    } = useContext(DataContext);
    const { allEmployees, schedule } = useContext(AppContext);
    const handleNewVacation = (employeeID) => {
        const foundEmployee = allEmployees.find(
            (e) => e.employeeID === Number(employeeID)
        );
        if (foundEmployee) {
            const foundEmployeeName = foundEmployee.firstname;
            const foundNameEntry = schedule.find(
                (e) => e.name === foundEmployeeName
            );
            setNewAppointment({
                id: foundNameEntry.meetings.length
                    ? foundNameEntry.meetings[
                          foundNameEntry.meetings.length - 1
                      ].id + 1
                    : 1,
                startTime: format(
                    startOfDay(new Date(...Object.values(startTime))),
                    'HH:mm:ss dd/MM/yyyy'
                ),
                endTime: format(
                    endOfDay(
                        add(new Date(...Object.values(startTime)), {
                            days: durationDay - 1,
                        })
                    ),
                    'HH:mm:ss dd/MM/yyyy'
                ),
                subject:
                    durationDay +
                    (Number(durationDay) === 1
                        ? ' Day Vacation'
                        : ' Days Vacation'),
            });
            setVac(true);
        }
    };
    return (
        <>
            <h2>Vacations</h2>
            <label htmlFor='vacation'>
                Enter Details of Your Future vecation
            </label>
            <EmployeeID title={'Vacation'} />
            <Days />
            <Months />
            <Years />
            <DurationDays />
            <FaPlus
                className='button'
                onClick={() => handleNewVacation(employeeID)}
            />
            <ConfirmMessage />
            {newAppointment.id ? (
                <ConfirmDecline
                    duration={durationDay}
                    setDuration={setDurationDay} /* important */
                />
            ) : (
                <p>Please, fill all fields!</p>
            )}
            <BackButton />
        </>
    );
};

export default Vacations;
