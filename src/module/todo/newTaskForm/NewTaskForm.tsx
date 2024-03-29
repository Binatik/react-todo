import { Input } from "../../../components/input/Input";
import { ITask, INewTaskFormProps, ITimer } from "./newTaskForm.types";
import { v4 as uuid } from "uuid";
import { useState } from "react";
import "./NewTaskForm.css";
import { TimerInput } from "../../../components/timerInput/TimerInput";
import { validatePatternInput } from "../../../helpers/validatePatternInput";
import { convertTime } from "../../../helpers/convertTime";

const templateTimerValue = {
  min: '',
  sec: ''
}

function NewTaskForm({ setTodos }: INewTaskFormProps) {
  const [value, setValue] = useState("");
  const [timerValue, setTimerValue] = useState(templateTimerValue)

  function setTimerSec(value: string) {
    setTimerValue((prev) => ({ ...prev, sec: value }))
  }

  function setTimerMin(value: string) {
    setTimerValue((prev) => ({ ...prev, min: value }))
  }

  function createTask(event: React.KeyboardEvent<HTMLFormElement>) {
    event.preventDefault()

    if (value.trim() === "") {
      return
    }

    const newId = uuid()

    const timer: ITimer = convertTime(timerValue.min, timerValue.sec)

    console.log(timer)

    const todo: ITask = {
      id: newId,
      todoName: value,
      create: new Date(),
      isComplited: false,
      status: "none",
      filter: "all",
    };

    setTodos((prev) => [...prev, todo]);
    setValue("");
    setTimerValue((prev) => {
      return { ...prev, min: '', sec: '' }
    })
  }

  return (
    <form onSubmit={createTask} className="new-todo-form">
      <Input
        onChange={(event) => setValue(event.currentTarget.value)}
        type="text"
        value={value}
        mode="primary"
        className="new-todo"
        placeholder="What needs to be done?"
        autoFocus
      />
      <TimerInput mode="primary"
        onKeyDown={validatePatternInput}
        onChange={(event) => setTimerMin(event.currentTarget.value)}
        value={timerValue.min}
        maxLength={3}
        className="new-todo-form__timer"
        placeholder="Min" />
      <TimerInput mode="primary"
        onKeyDown={validatePatternInput}
        onChange={(event) => setTimerSec(event.currentTarget.value)}
        value={timerValue.sec}
        maxLength={3}
        className="new-todo-form__timer"
        placeholder="Sec" />
      <button type="submit"></button>
    </form>
  );
}

export { NewTaskForm };
