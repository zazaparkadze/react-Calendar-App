import React from 'react';
import AddNewEmployee from './newEmployee/AddNewEmployee';
import Auth from './Auth';

const Admin = ({ allEmployees, setAllEmployees, schedule, setSchedule }) => {
    return (
        <div className='App'>
            <Auth />
            <AddNewEmployee
                allEmployees={allEmployees}
                setAllEmployees={setAllEmployees}
                schedule={schedule}
                setSchedule={setSchedule}
            />
        </div>
    );
};

export default Admin;
