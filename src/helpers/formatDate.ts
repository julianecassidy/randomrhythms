const MONTHS = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December"
];
const WEEKDAYS = [
  "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"
];

function formatDate(date: Date) : string {

  const
    // year = date.getFullYear(),
    month = MONTHS[date.getMonth()], // months are zero indexed
    day = date.getDate(),
    weekday = WEEKDAYS[date.getDay()],
    hour = date.getHours(),
    minute = date.getMinutes(),
    hourFormatted = hour % 12 || 12, // hour returned in 24 hour format
    minuteFormatted = minute < 10 ? "0" + minute : minute,
    morning = hour < 12 ? "am" : "pm";

  return `${weekday}, ${month} ${day} at ${hourFormatted}:${minuteFormatted} ${morning}`;
}

export default formatDate;