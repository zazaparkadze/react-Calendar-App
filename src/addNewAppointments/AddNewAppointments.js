import { FaPlus } from 'react-icons/fa';
import EmployeeID from '../Employees/EmployeeID';
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
import DataContext from '../Context/DataContext';
import { AppContext } from '../App';
import { useContext } from 'react';

const AddNewAppointment = () => {
    const {
        employeeID,
        startTime,
        duration,
        subject,
        setNewAppointment,
        setVac,
        newAppointment,
    } = useContext(DataContext);
    const { allEmployees, schedule } = useContext(AppContext);
    return (
        <div>
            <form className='App' onSubmit={(e) => e.preventDefault()}>
                <EmployeeID title={'Add New Appointment'} />
                <Hours />
                <Minutes />
                <Days />
                <Months />
                <Years />
                <Duration />
                <Subject />
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
                            setVac
                        );
                    }}
                />
                <ConfirmMessage />
                {newAppointment.id ? (
                    <ConfirmDecline />
                ) : (
                    <p>Please, fill all fields!</p>
                )}
                <BackButton />
            </form>
        </div>
    );
};

export default AddNewAppointment;
