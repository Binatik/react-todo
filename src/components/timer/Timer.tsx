import classNames from "classnames";
import { ITimerProps } from "./Timer.types";
import "./Timer.css";
import { memo, useEffect, useRef } from "react";
import { useUpdateTimer } from "../../hooks/useUpdateTimer";

const Timer = memo(function Timer({
  mode,
  pause,
  onPause,
  onResume,
  onEnd,
  duration,
  className,
}: ITimerProps) {
  const { setUpdateTimer, timer } = useUpdateTimer();

  const intervalRefId = useRef(0);
  const timeoutRefId = useRef(0);
  const currentTimeRef = useRef(duration);

  useEffect(() => {
    setUpdateTimer(currentTimeRef.current);
  }, []);

  useEffect(() => {
    if (duration <= 0) {
      onEnd();
      return;
    }

    if (pause) {
      return;
    }

    intervalRefId.current = setInterval(() => {
      currentTimeRef.current -= 1000;
      setUpdateTimer(currentTimeRef.current);

      if (currentTimeRef.current <= 0) {
        clearInterval(intervalRefId.current);
        onEnd();
      }
    }, 1000);

    return () => onStopTimer();
  }, [pause]);

  function onStopTimer() {
    clearTimeout(timeoutRefId.current);
    clearInterval(intervalRefId.current);
  }

  function pauseTimer() {
    if (!pause) {
      onStopTimer();
      onPause(currentTimeRef.current);
    }
  }

  function playTimer() {
    if (pause) {
      onResume();
    }
  }

  return (
    <div className="timer">
      <button type="button" className="button--hidden">
        Заглушка
      </button>
      <button
        onClick={playTimer}
        disabled={!pause}
        type="button"
        className={classNames("timer__play", className, {
          ["timer--primary"]: mode === "primary",
        })}
      >
        ▶
      </button>
      <button
        onClick={pauseTimer}
        type="button"
        disabled={pause}
        className={classNames("timer__stop", className, {
          ["timer--primary"]: mode === "primary",
        })}
      >
        ⏸
      </button>
      <span>
        {timer.hours}:{timer.minutes}:{timer.seconds}
      </span>
    </div>
  );
});

export { Timer };
