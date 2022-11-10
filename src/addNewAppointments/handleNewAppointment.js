import { format, add } from 'date-fns';

const handleNewAppointment = (
    employeeID,
    allEmployees,
    schedule,
    startTime,
    duration,
    subject,
    setNewAppointment,
    vac,
    setVac
) => {
    const foundEmployee = allEmployees.find(
        (e) => e.employeeID === Number(employeeID)
    );
    if (foundEmployee) {
        const foundEmployeeName = foundEmployee.firstname;
        const foundNameEntry = schedule.find(
            (e) => e.name === foundEmployeeName
        );
        //
        setNewAppointment({
            id: foundNameEntry.meetings.length
                ? foundNameEntry.meetings[foundNameEntry.meetings.length - 1]
                      .id + 1
                : Number(`${foundNameEntry.id}00`),
            startTime: format(
                new Date(...Object.values(startTime)),
                'HH:mm:ss dd/MM/yyyy'
            ),
            endTime: format(
                add(new Date(...Object.values(startTime)), {
                    minutes: duration,
                }),
                'HH:mm:ss dd/MM/yyyy'
            ),
            subject: duration + ' minutes meeting:' + subject,
        });
        setVac(false);
    } else {
        console.log('no employee found');
    }
};
export default handleNewAppointment;
