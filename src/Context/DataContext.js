import { useState, createContext } from 'react';

const DataContext = createContext({});

export const DataProvider = ({ children }) => {
    const [employeeID, setEmployeeID] = useState('');
    const [duration, setDuration] = useState(5);
    const [durationDay, setDurationDay] = useState(1);
    const [subject, setSubject] = useState('');
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
    const [login, setLogin] = useState(false);
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [registered, setRegistered] = useState('');
    const [newEmployee, setNewEmployee] = useState({
        id: 0,
        firstname: '',
        lastname: '',
        employeeID: 0,
    });
    const [searchAppointment, setSearchAppointment] = useState('');

    return (
        <DataContext.Provider
            value={{
                username,
                setUsername,
                password,
                setPassword,
                login,
                setLogin,
                registered,
                setRegistered,
                newAppointment,
                setNewAppointment,
                employeeID,
                setEmployeeID,
                duration,
                setDuration,
                durationDay,
                setDurationDay,
                subject,
                setSubject,
                vac,
                setVac,
                startTime,
                setStartTime,
                newEmployee,
                setNewEmployee,
                searchAppointment,
                setSearchAppointment,
            }}
        >
            {children}
        </DataContext.Provider>
    );
};

export default DataContext;
