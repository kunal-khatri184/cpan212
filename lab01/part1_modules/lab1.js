const _ = require('lodash');
const dayjs = require('dayjs');

const holidays = [
    { name: "Christmas", date: "2025-12-25" },
    { name: "Canada Day", date: "2025-07-01" },
    { name: "New Year", date: "2026-01-01" },
];

const today = dayjs();

holidays.forEach(holiday => {
    const daysLeft = dayjs(holiday.date).diff(today, 'day');
    console.log(`${holiday.name} is in ${daysLeft} days`);
});

const randomHoliday = _.sample(holidays);
console.log(`Random Holiday: ${randomHoliday.name} on ${randomHoliday.date}`);

console.log(`Index of Christmas: ${_.findIndex(holidays, { name: "Christmas" })}`);
console.log(`Index of Canada Day: ${_.findIndex(holidays, { name: "Canada Day" })}`);
