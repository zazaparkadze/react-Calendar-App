import { FaPlus } from 'react-icons/fa';
import EmployeeID from './EmployeeID';
import Hours from './Hours';
import Days from './Days';
import Minutes from './Minutes';
import Months from './Months';
import Years from './Years';
import Duration from './Duration';
import BackButton from '../buttons/BackButton';
import ConfirmMessage from './ConfirmMessage';
import ConfirmDecline from './ConfirmDecline';
import Subject from './Subject';
import handleNewAppointment from './handleNewAppointment';

const AddNewAppointment = ({
    allEmployees,
    schedule,
    startTime,
    setStartTime,
    employeeID,
    setEmployeeID,
    duration,
    setDuration,
    setDurationDay,
    newAppointment,
    setNewAppointment,
    subject,
    setSubject,
    API_URI_schedule,
    setFetchError,
    vac,
    setVac,
}) => {
    return (
        <div>
            <form className='App' onSubmit={(e) => e.preventDefault()}>
                <EmployeeID
                    setEmployeeID={setEmployeeID}
                    employeeID={employeeID}
                    allEmployees={allEmployees}
                    title={'Appointment'}
                />
                <Hours startTime={startTime} setStartTime={setStartTime} />
                <Minutes startTime={startTime} setStartTime={setStartTime} />
                <Days startTime={startTime} setStartTime={setStartTime} />
                <Months startTime={startTime} setStartTime={setStartTime} />
                <Years startTime={startTime} setStartTime={setStartTime} />
                <Duration duration={duration} setDuration={setDuration} />
                <Subject subject={subject} setSubject={setSubject} />
                <FaPlus
                    type='submit'
                    className='button'
                    onClick={() => {
                        handleNewAppointment(
                            employeeID,
                            allEmployees,
                            schedule,
                            startTime,
                            duration,
                            subject,
                            setNewAppointment,
                            vac,
                            setVac
                        );
                    }}
                />
                <ConfirmMessage
                    newAppointment={newAppointment}
                    setStartTime={setStartTime}
                    startTime={startTime}
                    setDuration={setDuration}
                    employeeID={employeeID}
                    schedule={schedule}
                    allEmployees={allEmployees}
                    setSubject={setSubject}
                    setNewAppointment={setNewAppointment}
                />
                {newAppointment.id ? (
                    <ConfirmDecline
                        startTime={startTime}
                        setStartTime={setStartTime}
                        setDuration={setDuration}
                        setDurationDay={setDurationDay}
                        employeeID={employeeID}
                        newAppointment={newAppointment}
                        schedule={schedule}
                        allEmployees={allEmployees}
                        setSubject={setSubject}
                        setNewAppointment={setNewAppointment}
                        duration={duration}
                        API_URI_schedule={API_URI_schedule}
                        setFetchError={setFetchError}
                        vac={vac}
                        setVac={setVac}
                    />
                ) : (
                    <p>Please, fill all fields!</p>
                )}
                <BackButton
                    startTime={startTime}
                    setStartTime={setStartTime}
                    setDuration={setDuration}
                    setSubject={setSubject}
                    setNewAppointment={setNewAppointment}
                />
            </form>
        </div>
    );
};

export default AddNewAppointment;
