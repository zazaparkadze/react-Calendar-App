import { Route, Routes, Link } from 'react-router-dom';
import Header from './Header';
import Nav from './Nav';
import Announcements from './announcements/Announcements';
import AddNewAppointment from './addNewAppointments/AddNewAppointments';
import ListAppointments from './listAppointments/ListAppointments';
import FreeTimeGaps from './freeTimeGaps/FreeTimeGaps';
import Vacations from './vacations/Vacations';
import Admin from './admin/Admin';
import photo from './img/katan.jpg';
import Auth from './admin/Auth';
import Register from './admin/Register';
import AddNewEmployee from './Employees/newEmployee/AddNewEmployee';
import DeleteEmployee from './Employees/deleteEmployee/DeleteEmployee';
import { DataProvider } from './Context/DataContext';
import { useState, useEffect, createContext } from 'react';
import { API_URI_employee, API_URI_schedule } from './config/API_URI_DB';

export const AppContext = createContext();

function App() {
    const [fetchError, setFetchError] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [auth, setAuth] = useState(true);
    const [schedule, setSchedule] = useState([]);
    const [searchAppointmentName, setSearchAppointmentName] = useState('');
    const [allEmployees, setAllEmployees] = useState([]);

    useEffect(() => {
        const fetchInfo = async (uri) => {
            try {
                const response = await fetch(uri, {
                    headers: {
                        'Content-Type': 'application/json',
                        Authorization: `Bearer ${localStorage.getItem(
                            'accessToken'
                        )}`,
                    },
                });
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
            <DataProvider>
                <AppContext.Provider
                    value={{
                        auth,
                        setAuth,
                        isLoading,
                        setIsLoading,
                        fetchError,
                        setFetchError,
                        schedule,
                        setSchedule,
                        allEmployees,
                        setAllEmployees,
                        API_URI_schedule,
                        API_URI_employee,
                        searchAppointmentName,
                        setSearchAppointmentName,
                    }}
                >
                    {!isLoading && !fetchError && <Header />}
                    {isLoading ? (
                        <p style={{ fontSize: '3rem' }}>Loading...</p>
                    ) : !auth ? (
                        <div className='App'>
                            <p>unauthorized</p>
                            <Link to='/' onClick={() => setAuth(true)}>
                                <p> Please, reload the app</p>
                            </Link>
                        </div>
                    ) : (
                        <Routes>
                            <Route path='/' element={<Auth />} />
                            <Route
                                path='/registration'
                                element={<Register />}
                            />
                            {/*  {login && (    ....<> </>*/}
                            <Route
                                path='/nav'
                                element={
                                    <>
                                        {!fetchError && !isLoading && (
                                            <>
                                                <Nav />
                                                <img src={photo} alt='mishka' />
                                            </>
                                        )}
                                    </>
                                }
                            />
                            <Route
                                path='/nav/listAppointments'
                                element={
                                    <>
                                        {isLoading && (
                                            <p style={{ fontSize: '3rem' }}>
                                                Loading...
                                            </p>
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
                                                schedule={schedule.filter(
                                                    (el) =>
                                                        el.name
                                                            .toLowerCase()
                                                            .includes(
                                                                searchAppointmentName.toLowerCase()
                                                            )
                                                )}
                                                setSchedule={setSchedule}
                                            />
                                        )}
                                    </>
                                }
                            />
                            <Route
                                path='/nav/addNewAppointment'
                                element={<AddNewAppointment />}
                            />
                            <Route
                                path='/nav/freeTimeGaps'
                                element={
                                    <>
                                        {isLoading && (
                                            <p style={{ fontSize: '3rem' }}>
                                                Loading...
                                            </p>
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
                                            <FreeTimeGaps />
                                        )}
                                    </>
                                }
                            />
                            <Route
                                path='/nav/vacations'
                                element={<Vacations />}
                            />
                            <Route
                                path='/nav/announcements'
                                element={<Announcements />}
                            />
                            <Route path='/nav/admin' element={<Admin />} />
                            <Route
                                path='/nav/admin/AddNewEmployee'
                                element={<AddNewEmployee />}
                            />
                            <Route
                                path='/nav/admin/DeleteEmployee'
                                element={<DeleteEmployee />}
                            />
                            {/*   )} */}
                        </Routes>
                    )}
                </AppContext.Provider>
            </DataProvider>
        </div>
    );
}

export default App;
