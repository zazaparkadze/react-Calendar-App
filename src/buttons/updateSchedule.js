import { formatISO, add, startOfDay, endOfDay } from 'date-fns/esm';
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
    setFetchError,
    vac,
    setVac
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
        const addMinutes = {
            minutes: duration,
        };
        const addDays = {
            days: duration - 1,
        };

        const newAppointmentFORMATISO = {
            ...newAppointment,
            startTime: vac
                ? formatISO(startOfDay(new Date(...Object.values(startTime))))
                : formatISO(new Date(...Object.values(startTime))),
            endTime: vac
                ? formatISO(
                      endOfDay(
                          add(
                              new Date(...Object.values(startTime)),
                              vac ? addDays : addMinutes
                          )
                      )
                  )
                : formatISO(
                      add(
                          new Date(...Object.values(startTime)),
                          vac ? addDays : addMinutes
                      )
                  ),
        };

        foundNameSchedule.meetings = [
            ...foundNameSchedule.meetings,
            newAppointmentFORMATISO,
        ];

        const updateOptions = {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
            },
            body: JSON.stringify({
                newApp: newAppointmentFORMATISO,
                entryID: foundNameSchedule.id,
            }),
        };
        const url = `${API_URI_schedule}`;
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
        setDuration(5);
        setVac(false);
    }
};
export default updateSchedule;
