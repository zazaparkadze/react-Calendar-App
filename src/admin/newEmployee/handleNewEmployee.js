import apiReguest from '../../config/apiRequest';
import { API_URI_employees, API_URI_schedule } from '../../config/API_URI_DB';

const handleNewEmployee = async (
    newEmployee,
    setNewEmployee,
    allEmployees,
    setAllEmployees,
    schedule,
    setSchedule
) => {
    setAllEmployees([...allEmployees, newEmployee]);

    //console.log(schedule);
    console.log(Array.isArray(schedule));

    const postRequestForNewEmployee = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(newEmployee),
    };
    const result = await apiReguest(
        API_URI_employees,
        postRequestForNewEmployee
    );
    if (result) throw new Error('json-server error');

    const newEmployeeNameEntry = {
        id: schedule[schedule.length - 1].id + 1,
        name: newEmployee.firstname,
        meetings: [],
    };
    //console.log(newEmployeeNameEntry);
    setSchedule([...schedule, newEmployeeNameEntry]);
    const postRequestForNewScheduleEntry = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(newEmployeeNameEntry),
    };
    const res = await apiReguest(
        API_URI_schedule,
        postRequestForNewScheduleEntry
    );
    if (res) throw new Error('json-server error');
    setNewEmployee({
        id: 0,
        firstname: '',
        lastname: '',
        employeeID: 0,
    });
};

export default handleNewEmployee;
