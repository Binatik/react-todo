import { useState } from "react";

function useUpdateTimer() {
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);

  const setUpdateTimer = (remainingTime: number) => {
    setHours(Math.floor((remainingTime / (1000 * 60 * 60)) % 24));
    setMinutes(Math.floor((remainingTime / 1000 / 60) % 60));
    setSeconds(Math.floor((remainingTime / 1000) % 60));
  }

  return {
    timer: {
      hours,
      minutes,
      seconds,
    },
    setUpdateTimer,
  }
}

export { useUpdateTimer }