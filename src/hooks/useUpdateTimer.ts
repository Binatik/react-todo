import { useState } from "react";

function useUpdateTimer() {
  const [hours, setHours] = useState("00");
  const [minutes, setMinutes] = useState("00");
  const [seconds, setSeconds] = useState("00");

  const setUpdateTimer = (remainingTime: number) => {
    const hoursString = Math.floor((remainingTime / (1000 * 60 * 60)) % 24)
      .toString()
      .padStart(2, "0");
    const minutesString = Math.floor((remainingTime / 1000 / 60) % 60)
      .toString()
      .padStart(2, "0");
    const secondsString = Math.floor((remainingTime / 1000) % 60)
      .toString()
      .padStart(2, "0");

    setHours(hoursString);
    setMinutes(minutesString);
    setSeconds(secondsString);
  };

  return {
    timer: {
      hours,
      minutes,
      seconds,
    },
    setUpdateTimer,
  };
}

export { useUpdateTimer };
