import {
    parseJSON,
    formatISO,
    areIntervalsOverlapping,
    min,
    max,
    compareAsc,
    startOfDay,
    endOfDay,
} from 'date-fns';
/* 
const schedule = require('../model/schedule.json').schedule;
const employees = require('../model/employees.json'); */
const functionFreeIntervals = (schedule, employees) => {
    const employeesNames = [];
    for (let i = 0; i < employees.length; i++) {
        employeesNames[i] = employees[i].firstname;
    }
    let selectedEmployeesSchedule = schedule.filter(
        (schedule) => employeesNames.indexOf(schedule.name) !== -1
    );
    // console.log(selectedEmployeesSchedule);
    function busyTimeGaps(schedule) {
        let intervals = [];
        for (let k = 0; k < schedule.length; k++) {
            let index = 0;
            for (let i = 0; i < schedule[k].meetings.length; i++) {
                intervals[index] = {
                    id: schedule[k].meetings[i].id,
                    startTime: parseJSON(schedule[k].meetings[i].startTime),
                    endTime: parseJSON(schedule[k].meetings[i].endTime),
                };
                index++;
            }
        }

        intervals.sort((a, b) =>
            compareAsc(new Date(a.startTime), new Date(b.startTime))
        );
        for (let i = 0; i < intervals.length - 1; ) {
            //  console.log(i);
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
    // console.log(intervals);
    const freeTimeGaps = (intervals) => {
        const arr = [];
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
    //console.log(freeIntervals);
    //
    function handleISOFormatting(freeIntervals) {
        freeIntervals.forEach((element) => {
            element.startTime = formatISO(element.startTime);
            element.endTime = formatISO(element.endTime);
        });
    }

    // console.log(schedule);
    handleISOFormatting(freeIntervals);
    return freeIntervals;
};

export default functionFreeIntervals;
