import React from 'react';
import EmployeeSearch from '../EmployeeSearch';
import { useContext } from 'react';
import DataContext from '../../Context/DataContext';
import { AppContext } from '../../App';
import BackButton from '../../buttons/BackButton';
import apiReguest from '../../config/apiRequest';
import { API_URI_employee } from '../../config/API_URI_DB';

const DeleteEmployee = () => {
    const { employeeID } = useContext(DataContext);
    const { allEmployees, setAllEmployees, schedule, setSchedule } =
        useContext(AppContext);

    const handleDeleteEmployee = async (employeeID) => {
        const foundEmployee = allEmployees.find(
            (employee) => employee.employeeID === Number(employeeID)
        );
        const updatedList = allEmployees.filter(
            (employee) => employee.employeeID !== Number(employeeID)
        );
        setAllEmployees(updatedList);

        const updatedScheduleList = schedule.filter(
            (schedule) => schedule.name !== foundEmployee.firstname
        );
        setSchedule(updatedScheduleList);
        console.log(foundEmployee);
        console.log(
            `Employee ${employeeID} and all entries successfully deleted`
        );
        // send delete request
        //
        const optionsObj = {
            method: 'DELETE',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ employeeID: employeeID }),
        };
        const deleteUrl = API_URI_employee;
        const resp = await apiReguest(deleteUrl, optionsObj);
        console.log(resp);
        //
    };
    return (
        <div className='App'>
            <>
                <p style={{ margin: '1.2rem', textAlign: 'center' }}>
                    You are about to Delete an Employee and All its Schedules
                </p>
                <EmployeeSearch title={'Delete Employee'} />
                <button
                    onClick={() => {
                        handleDeleteEmployee(employeeID);
                    }}
                >
                    delete employee
                </button>
                <BackButton />
            </>
        </div>
    );
};

export default DeleteEmployee;
