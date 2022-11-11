import { API_URI_employee, API_URI_schedule } from './config/API_URI_DB';
import { useState, useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import Header from './Header';
import Nav from './Nav';
import Announcements from './announcements/Announcements';
import AddNewAppointment from './addNewAppointments/AddNewAppointments';
import ListAppointments from './listAppointments/ListAppointments';
import FreeTimeGaps from './freeTimeGaps/FreeTimeGaps';
import Vacations from './vacations/Vacations';
import Admin from './admin/Admin';
import photo from './img/katan.jpg';

function App() {
    const [employeeID, setEmployeeID] = useState('');
    const [allEmployees, setAllEmployees] = useState([]);
    const [schedule, setSchedule] = useState([]);
    const [searchAppointmentName, setSearchAppointmentName] = useState('');
    const [duration, setDuration] = useState(5);
    const [durationDay, setDurationDay] = useState(1);
    const [subject, setSubject] = useState('');
    const [fetchError, setFetchError] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [vac, setVac] = useState(false);
    const [startTime, setStartTime] = useState({
        year: new Date().getFullYear(),
        month: new Date().getMonth(),
        day: new Date().getDate(),
        hours: new Date().getHours(),
        minutes: new Date().getMinutes(),
        seconds: 0,
        milliseconds: 0,
    });
    const [newAppointment, setNewAppointment] = useState({
        id: 0,
        startTime: '',
        endTime: '',
        subject: '',
    });

    useEffect(() => {
        const fetchInfo = async (uri) => {
            try {
                const response = await fetch(uri);
                if (!response.ok)
                    throw new Error('Did not receive expected data');
                const data = await response.json();
                return data;
            } catch (err) {
                setFetchError(err.message);
            } finally {
                setIsLoading(false);
            }
        };

        (async () => {
            const employeeList = await fetchInfo(API_URI_employee);
            setAllEmployees(employeeList);
        })();
        (async () => {
            const scheduleList = await fetchInfo(API_URI_schedule);
            setSchedule(scheduleList);
        })();
    }, []);

    return (
        <div className='App'>
            {!isLoading && !fetchError && <Header />}
            <Routes>
                <Route
                    path='/'
                    element={
                        <>
                            <Nav />
                            <img src={photo} alt='mishka' />
                        </>
                    }
                />
                <Route
                    path='/listAppointments'
                    element={
                        <>
                            {isLoading && (
                                <p style={{ fontSize: '3rem' }}>Loading...</p>
                            )}
                            {fetchError && (
                                <>
                                    <p
                                        style={{ color: 'red' }}
                                    >{`Error: ${fetchError}`}</p>
                                    <p>reload the app</p>
                                </>
                            )}

                            {!fetchError && !isLoading && (
                                <ListAppointments
                                    schedule={schedule.filter((el) =>
                                        el.name
                                            .toLowerCase()
                                            .includes(
                                                searchAppointmentName.toLowerCase()
                                            )
                                    )}
                                    setSchedule={setSchedule}
                                    searchAppointmentName={
                                        searchAppointmentName
                                    }
                                    setSearchAppointmentName={
                                        setSearchAppointmentName
                                    }
                                />
                            )}
                        </>
                    }
                />
                <Route
                    path='/addNewAppointment'
                    element={
                        <AddNewAppointment
                            schedule={schedule}
                            setSchedule={setSchedule}
                            allEmployees={allEmployees}
                            startTime={startTime}
                            setStartTime={setStartTime}
                            employeeID={employeeID}
                            setEmployeeID={setEmployeeID}
                            duration={duration}
                            setDuration={setDuration}
                            subject={subject}
                            setSubject={setSubject}
                            newAppointment={newAppointment}
                            setNewAppointment={setNewAppointment}
                            API_URI_schedule={API_URI_schedule}
                            setFetchError={setFetchError}
                            vac={vac}
                            setVac={setVac}
                        />
                    }
                />

                <Route
                    path='/freeTimeGaps'
                    element={
                        <>
                            {isLoading && (
                                <p style={{ fontSize: '3rem' }}>Loading...</p>
                            )}
                            {fetchError && (
                                <>
                                    <p
                                        style={{ color: 'red' }}
                                    >{`Error: ${fetchError}`}</p>
                                    <p>reload the app</p>
                                </>
                            )}
                            {!isLoading && !fetchError && (
                                <FreeTimeGaps
                                    allEmployees={allEmployees}
                                    schedule={schedule}
                                    startTime={startTime}
                                    setStartTime={setStartTime}
                                    setDuration={setDuration}
                                    setSubject={setSubject}
                                    setNewAppointment={setNewAppointment}
                                />
                            )}
                        </>
                    }
                />
                <Route
                    path='/vacations'
                    element={
                        <Vacations
                            schedule={schedule}
                            allEmployees={allEmployees}
                            startTime={startTime}
                            setStartTime={setStartTime}
                            employeeID={employeeID}
                            setEmployeeID={setEmployeeID}
                            durationDay={durationDay}
                            setDurationDay={setDurationDay}
                            newAppointment={newAppointment}
                            setNewAppointment={setNewAppointment}
                            setSubject={setSubject}
                            API_URI_schedule={API_URI_schedule}
                            setFetchError={setFetchError}
                            vac={vac}
                            setVac={setVac}
                        />
                    }
                />
                <Route path='/announcements' element={<Announcements />} />
                <Route
                    path='/admin'
                    element={
                        <Admin
                            allEmployees={allEmployees}
                            setAllEmployees={setAllEmployees}
                            schedule={schedule}
                            setSchedule={setSchedule}
                        />
                    }
                />
            </Routes>
        </div>
    );
}

export default App;
