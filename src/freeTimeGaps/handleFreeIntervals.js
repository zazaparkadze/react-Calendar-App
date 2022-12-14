import {
    isSameDay,
    parseJSON,
    formatISO,
    parseISO,
    areIntervalsOverlapping,
    min,
    max,
    compareAsc,
    startOfDay,
    endOfDay,
} from 'date-fns';

const handleFreeIntervals = (schedule, employees, currentDate) => {
    const employeesNames = [];
    for (let i = 0; i < employees.length; i++) {
        employeesNames[i] = employees[i].firstname;
    }
    let selectedEmployeesSchedule = schedule.filter(
        (schedule) => employeesNames.indexOf(schedule.name) !== -1
    );
    //
    //
    function busyTimeGaps(schedule) {
        let intervals = [];
        let index = 0;
        for (let k = 0; k < schedule.length; k++) {
            for (let i = 0; i < schedule[k].meetings.length; i++) {
                //
                if (
                    isSameDay(
                        parseISO(schedule[k].meetings[i].endTime),
                        parseISO(currentDate)
                    )
                ) {
                    intervals[index] = {
                        id: schedule[k].meetings[i].id,
                        startTime: parseJSON(schedule[k].meetings[i].startTime),
                        endTime: parseJSON(schedule[k].meetings[i].endTime),
                    };
                    //
                    index++;
                }
            }
        }

        intervals.sort((a, b) => compareAsc(a.startTime, b.startTime));

        for (let i = 0; i < intervals.length - 1; ) {
            // console.log(i);
            let result = areIntervalsOverlapping(
                {
                    start: intervals[i].startTime,
                    end: intervals[i].endTime,
                },
                {
                    start: intervals[i + 1].startTime,
                    end: intervals[i + 1].endTime,
                },
                { inclusive: true }
            );
            if (result) {
                const mergedIntervals = {
                    startTime: min([
                        intervals[i].startTime,
                        intervals[i + 1].startTime,
                    ]),
                    endTime: max([
                        intervals[i].endTime,
                        intervals[i + 1].endTime,
                    ]),
                };
                intervals.splice(i, 2, mergedIntervals);
            } else {
                i = i + 1;
            }
        }
        return intervals;
    }

    const intervals = busyTimeGaps(selectedEmployeesSchedule);
    const freeTimeGaps = (intervals) => {
        const arr = [];
        //
        if (intervals.length === 0) {
            arr[0] = {
                id: 1000,
                startTime: startOfDay(parseISO(currentDate)),
                endTime: endOfDay(parseISO(currentDate)),
            };
            return arr;
        }
        //
        arr[0] = {
            id: 0,
            startTime: startOfDay(intervals[0].startTime), //startTime's start of the day
            endTime: intervals[0].startTime,
        };
        for (let i = 0; i < intervals.length - 1; i++) {
            arr[i + 1] = {
                id: i + 1 + 1000,
                startTime: intervals[i].endTime,
                endTime: intervals[i + 1].startTime,
            };
        }
        arr[intervals.length] = {
            id: intervals.length + 1000,
            startTime: intervals[intervals.length - 1].endTime, //endTimes's end of the day
            endTime: endOfDay(intervals[intervals.length - 1].endTime),
        };

        return arr;
    };
    const freeIntervals = freeTimeGaps(intervals);

    function handleISOFormatting(freeIntervals) {
        freeIntervals.forEach((element) => {
            element.startTime = formatISO(element.startTime);
            element.endTime = formatISO(element.endTime);
        });
    }

    handleISOFormatting(freeIntervals);
    if (
        freeIntervals[0].startTime.includes('00:00:00') &&
        freeIntervals[0].endTime.includes('00:00:00') &&
        freeIntervals[1].startTime.includes('23:59:59') &&
        freeIntervals[1].endTime.includes('23:59:59')
    ) {
        return [];
    }
    return freeIntervals;
};

export default handleFreeIntervals;
