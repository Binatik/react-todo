import classNames from 'classnames';
import { ITimerProps } from './Timer.types';
import { memo, useEffect, useRef, useState } from 'react';
import './Timer.css';

type ITrigger = 'stop' | 'play' | 'default';
let templateTrigger: ITrigger = 'default';

const Timer = memo(function Timer({ mode, setUpdateDeadline, startDeadline, lastDeadline, className }: ITimerProps) {
  const [days, setDays] = useState(0);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);
  const [trigger, setTrigger] = useState(templateTrigger);
  const [hasDeadline, setHasDeadline] = useState(false)

  const start = startDeadline.getTime();
  const last = lastDeadline.getTime();

  const idIntervalRef = useRef<null | number>(null);

  useEffect(() => {
    if (trigger === 'default') {
      startInterval();
    }

    if (trigger === 'play') {
      startInterval();
    }

    return () => {
      stopInterval();
    };
  }, [trigger]);

  function startInterval() {
    stopInterval();

    let currentTime = last;

    idIntervalRef.current = setInterval(() => {
      currentTime -= 1000; // уменьшаем время на 1 секунду

      if (currentTime < start) {
        stopInterval(); // останавливаем интервал, если достигли start
        setHasDeadline(true)
      }

      const remainingTime = new Date(currentTime - start);
      setUpdateDeadline(new Date(currentTime))

      setDays(Math.floor(remainingTime.getTime() / (1000 * 60 * 60 * 24)));
      setHours(Math.floor((remainingTime.getTime() / (1000 * 60 * 60)) % 24));
      setMinutes(Math.floor((remainingTime.getTime() / 1000 / 60) % 60));
      setSeconds(Math.floor((remainingTime.getTime() / 1000) % 60));
    }, 1000);
  }

  function stopInterval() {
    if (idIntervalRef.current) {
      clearInterval(idIntervalRef.current);
      idIntervalRef.current = null;
    }
  }

  function onPlayTimer() {
    if (trigger === 'default' || trigger === 'play') {
      return;
    }

    setTrigger('play');
    templateTrigger = 'play';
  }

  function onStopTimer() {
    stopInterval();
    setTrigger('stop');
    templateTrigger = 'stop';
  }

  function renderTimer() {
    return (
      <div className="timer">
        <button type="button" className="button--hidden">
          Заглушка
        </button>
        <button
          onClick={onPlayTimer}
          type="button"
          className={classNames('timer__play', className, {
            ['timer--primary']: mode === 'primary',
          })}
        >
          ▶
        </button>
        <button
          onClick={onStopTimer}
          type="button"
          className={classNames('timer__stop', className, {
            ['timer--primary']: mode === 'primary',
          })}
        >
          ⏸
        </button>
        <span>
          {days}:{hours}:{minutes}:{seconds}
        </span>
      </div>
    );
  }

  return hasDeadline ? (
    <span className="timer__off">Время истекло</span>
  ) : (
    renderTimer()
  );
});

export { Timer };