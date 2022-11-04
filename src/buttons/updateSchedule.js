import { formatISO, add } from 'date-fns/esm';
import apiReguest from '../config/apiRequest';

const updateSchedule = async (
    employeeID,
    newAppointment,
    schedule,
    allEmployees,
    setStartTime,
    setDuration,
    startTime,
    duration,
    API_URI_schedule,
    setFetchError
) => {
    const foundEmployee = allEmployees.find(
        (e) => e.employeeID === Number(employeeID)
    );
    if (foundEmployee) {
        const foundEmployeeName = foundEmployee.firstname;
        const foundNameSchedule = schedule.find(
            (e) => e.name === foundEmployeeName
        );
        // converting to ISO format
        const newAppointmentFORMATISO = {
            ...newAppointment,
            startTime: formatISO(new Date(...Object.values(startTime))),
            endTime: formatISO(
                add(new Date(...Object.values(startTime)), {
                    minutes: duration,
                })
            ),
        };
        // console.log(newAppointmentFORMATISO);
        //adding new appointment to meetings array
        foundNameSchedule.meetings = [
            ...foundNameSchedule.meetings,
            newAppointmentFORMATISO,
        ];
        //console.log(foundNameSchedule);

        const updateOptions = {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(foundNameSchedule),
        };

        const url = `${API_URI_schedule}/${foundNameSchedule.id}`;
        const result = await apiReguest(url, updateOptions);
        if (result) setFetchError(result);

        setStartTime({
            ...startTime,
            year: 2022,
            month: 0,
            day: 1,
            hours: 0,
            minutes: 0,
            seconds: 0,
            miliseconds: 0,
        });
        setDuration(0);
    }
};
export default updateSchedule;

/* 
console.log(schedule);
        schedule.map((e) =>
            e.name === foundNameEntry.name
                ? (e = { ...newAppointmentFORMATISO })
                : null
        );
        console.log(schedule, 'zaza'); */
