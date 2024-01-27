import { convertTime } from "./convertTime";

function parserTimerIso(currentDateTime: Date, timer: ReturnType<typeof convertTime>) {
  return new Date(
    currentDateTime.getFullYear(),
    currentDateTime.getMonth(),
    currentDateTime.getDate() + timer.days,
    currentDateTime.getHours() + timer.hours,
    currentDateTime.getMinutes() + timer.minutes,
    currentDateTime.getSeconds() + timer.seconds
  )
}

export { parserTimerIso }