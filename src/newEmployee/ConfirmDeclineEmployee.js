import React from 'react';
import NewEmployeeCancelButton from './NewEmployeeCancelButton';
import NewEmployeeOkButton from './NewEmployeeOkButton';

const ConfirmDeclineEmployee = ({
    newEmployee,
    setNewEmployee,
    allEmployees,
    setAllEmployees,
    schedule,
    setSchedule,
}) => {
    return (
        <div>
            <NewEmployeeOkButton
                newEmployee={newEmployee}
                setNewEmployee={setNewEmployee}
                allEmployees={allEmployees}
                setAllEmployees={setAllEmployees}
                schedule={schedule}
                setSchedule={setSchedule}
            />
            <NewEmployeeCancelButton setNewEmployee={setNewEmployee} />
        </div>
    );
};

export default ConfirmDeclineEmployee;
