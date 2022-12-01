import React from 'react';
import AddNewEmployee from '../newEmployee/AddNewEmployee';

const Admin = ({ allEmployees, setAllEmployees, schedule, setSchedule }) => {
    return (
        <div className='App'>
            {localStorage.getItem('roles').includes(5150) ? (
                <AddNewEmployee
                    allEmployees={allEmployees}
                    setAllEmployees={setAllEmployees}
                    schedule={schedule}
                    setSchedule={setSchedule}
                />
            ) : (
                <p>Not Authorized</p>
            )}
        </div>
    );
};

export default Admin;
