import { Input } from "../../../components/input/Input";
import { ITask, INewTaskFormProps, ITimer } from "./newTaskForm.types";
import { v4 as uuid } from "uuid";
import { ChangeEvent, useState } from "react";
import "./NewTaskForm.css";
import { TimerInput } from "../../../components/timerInput/TimerInput";
import { validatePatternInput } from "../../../helpers/validatePatternInput";
import { convertTime } from "../../../helpers/convertTime";
import { parserTimerIso } from "../../../helpers/parserTimerIso";

const templateTimerValue = {
  min: "",
  sec: "",
};

function NewTaskForm({ setTodos }: INewTaskFormProps) {
  const [value, setValue] = useState("");
  const [timerValue, setTimerValue] = useState(templateTimerValue);

  function validateSec(event: ChangeEvent<HTMLInputElement>) {
    const value = event.target.value;
    validatePatternInput(event);

    setTimerValue((prev) => ({ ...prev, sec: value }));
  }

  function validateMin(event: ChangeEvent<HTMLInputElement>) {
    const value = event.target.value;
    validatePatternInput(event);

    setTimerValue((prev) => ({ ...prev, min: value }));
  }

  function createTask(event: React.KeyboardEvent<HTMLFormElement>) {
    event.preventDefault();

    if (value.trim() === "") {
      return;
    }

    const create = new Date();
    const timer: ITimer = convertTime(timerValue.min, timerValue.sec);

    const todo: ITask = {
      id: uuid(),
      todoName: value,
      create,
      isComplited: false,
      status: "none",
      filter: "all",
      pausePoint: null,
      pauseTimestamp: null,
      pause: false,
      deadline: parserTimerIso(create, timer),
    };

    setTodos((prev) => [...prev, todo]);
    setValue("");
    setTimerValue((prev) => {
      return { ...prev, min: "", sec: "" };
    });
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
      <TimerInput
        mode="primary"
        onKeyDown={validatePatternInput}
        onChange={(event) => validateMin(event)}
        value={timerValue.min}
        maxLength={3}
        className="new-todo-form__timer"
        placeholder="Min"
      />
      <TimerInput
        mode="primary"
        onKeyDown={validatePatternInput}
        onChange={(event) => validateSec(event)}
        value={timerValue.sec}
        maxLength={3}
        className="new-todo-form__timer"
        placeholder="Sec"
      />
      <button type="submit"></button>
    </form>
  );
}

export { NewTaskForm };
