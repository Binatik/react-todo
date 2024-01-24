function convertTime(minutesStr: string, secondsStr: string) {
  const hours = Math.floor(+minutesStr / 60);
  const days = Math.floor(hours / 24);

  const remainingMinutes = +minutesStr % 60;
  const remainingHours = hours % 24;

  const minutesFromSeconds = Math.floor(+secondsStr / 60);
  const convertedMinutes = remainingMinutes + minutesFromSeconds;
  const remainingSeconds = +secondsStr % 60;

  return {
    days: days,
    hours: remainingHours,
    minutes: convertedMinutes,
    seconds: remainingSeconds
  };
}

export {convertTime}
