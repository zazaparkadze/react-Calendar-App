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
    setLinkClicked,
    allEmployees,
    schedule,
    setSchedule,
    startTime,
    setStartTime,
    employeeID,
    setEmployeeID,
    duration,
    setDuration,
    newAppointment,
    setNewAppointment,
    subject,
    setSubject,
    API_URI_schedule,
    setFetchError,
}) => {
    return (
        <div>
            <form className='App' onSubmit={(e) => e.preventDefault()}>
                <EmployeeID
                    setEmployeeID={setEmployeeID}
                    employeeID={employeeID}
                    allEmployees={allEmployees}
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
                            setNewAppointment
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
                        employeeID={employeeID}
                        newAppointment={newAppointment}
                        schedule={schedule}
                        allEmployees={allEmployees}
                        setSubject={setSubject}
                        setNewAppointment={setNewAppointment}
                        duration={duration}
                        API_URI_schedule={API_URI_schedule}
                        setFetchError={setFetchError}
                    />
                ) : (
                    <p>Please, fill all fields!</p>
                )}
                <BackButton
                    setLinkClicked={setLinkClicked}
                    startTime={startTime}
                    setStartTime={setStartTime}
                    setDuration={setDuration}
                    setSubject={setSubject}
                />
            </form>
        </div>
    );
};

export default AddNewAppointment;
