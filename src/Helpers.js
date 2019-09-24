import moment from 'moment';

export const getWeekDays = date => {

    const startOfWeek = moment(date).startOf('isoWeek');
    const endOfWeek = moment(date).endOf('isoWeek');

    const days = [];

    let day = startOfWeek;

    while (day <= endOfWeek) {
        days.push({weekday: day.toDate()});
        day = day.clone().add(1, 'd');
    }

    return days;
}

export const getDayString = date => moment(date).format("dddd");

export const getDate = date => moment(date).format("MMM DD");

export const dateSelectorLabel = dates => {
    const firstday = dates[0].weekday;
    const lastday = dates[6].weekday;

    return `${moment(firstday).format("MMM DD")} to ${moment(lastday).format("MMM DD")}`
}

export const timeSlots = () => {
    const slots = [];

    for(let i = 10; i <= 23; i++) {
        slots.push({
            hour: i,
            formattedHour: `${i.toLocaleString(undefined, {minimumIntegerDigits: 2, useGrouping: false})}:00`
        })
    }

    return slots;
}