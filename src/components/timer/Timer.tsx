import classNames from 'classnames'
import { ITimerProps } from './Timer.types'
import { memo, useEffect, useRef, useState } from 'react';
import './Timer.css'

type ITrigger = 'stop' | 'play' | 'default'
let templateTrigger: ITrigger = 'default'

const Timer = memo(function Timer({ mode, startDeadline, deadline, className }: ITimerProps) {
  const [days, setDays] = useState(0);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);
  const [trigger, setTrigger] = useState(templateTrigger);

  const idIntervalRef = useRef(0)

  console.log(startDeadline)
  useEffect(() => {
    if (trigger === 'default') {
      idIntervalRef.current = setInterval(() => {
        getTime()
      }, 1000);

    }

    if (trigger === 'play') {
      idIntervalRef.current = setInterval(() => {
        getTime()
      }, 1000);
    }

    getTime()
    return () => clearInterval(idIntervalRef.current);
  }, [trigger]);

  function getTime() {
    const time = deadline.getTime() - Date.now()

    if (time <= 0) {
      setDays(0);
      setHours(0);
      setMinutes(0);
      setSeconds(0);
      return;
    }

    setDays(Math.floor(time / (1000 * 60 * 60 * 24)));
    setHours(Math.floor((time / (1000 * 60 * 60)) % 24));
    setMinutes(Math.floor((time / 1000 / 60) % 60));
    setSeconds(Math.floor((time / 1000) % 60));
  }

  function onPlayTimer() {
    if (trigger === 'default') {
      return
    }

    setTrigger('play')
    templateTrigger = 'play'
  }

  function onStopTimer() {
    clearInterval(idIntervalRef.current);
    setTrigger('stop')

    templateTrigger = 'stop'
  }

  return (
    <div className="timer">
      <button type='button' className='button--hidden'>Заглушка</button>
      <button onClick={onPlayTimer} type="button" className={classNames('timer__play', className, {
        ['timer--primary']: mode === 'primary'
      })}>▶</button>
      <button onClick={onStopTimer} type="button" className={classNames('timer__stop', className, {
        ['timer--primary']: mode === 'primary'
      })}>⏸</button>
      {minutes === 0 && seconds === 0 ? <span>Время истекло</span> : <span>{days}:{hours}:{minutes}:{seconds}</span>}
    </div>
  )
})

export { Timer }