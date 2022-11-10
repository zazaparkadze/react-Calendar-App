import React, { useState } from 'react';
import AddNewEmployee from './newEmployee/AddNewEmployee';
import Auth from './Auth';

const Admin = ({ allEmployees, setAllEmployees, schedule, setSchedule }) => {
    const [login, setLogin] = useState(false);
    return (
        <div className='App'>
            {!login ? (
                <Auth login={login} setLogin={setLogin} />
            ) : (
                <AddNewEmployee
                    allEmployees={allEmployees}
                    setAllEmployees={setAllEmployees}
                    schedule={schedule}
                    setSchedule={setSchedule}
                />
            )}
        </div>
    );
};

export default Admin;
