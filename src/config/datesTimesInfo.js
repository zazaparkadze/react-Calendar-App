function makeArrayOfConsecutiveNumbers(k, n) {
    const a = [];
    for (let i = k; i < n + 1; i++) {
        a[i] = i;
    }
    return a.slice(k);
}
const days = makeArrayOfConsecutiveNumbers(1, 31);
const hours = makeArrayOfConsecutiveNumbers(0, 23);
const years = makeArrayOfConsecutiveNumbers(2022, 2026);
const minutes = makeArrayOfConsecutiveNumbers(0, 59);
const durationsDays = makeArrayOfConsecutiveNumbers(1, 33);
const durations = [5, 10, 20, 30, 40, 50, 60, 90, 120, 150, 180, 240, 300];
const months = [
    '0Jan',
    '1Feb',
    '2Mar',
    '3Apr',
    '4May',
    '5Jun',
    '6Jul',
    '7Aug',
    '8Sep',
    '9Oct',
    '10Nov',
    '11Dec',
];

export { years, months, days, hours, minutes, durations, durationsDays };
