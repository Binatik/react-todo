import { Input } from "../../../components/input/Input";
import { ITask, INewTaskFormProps, ITimer } from "./newTaskForm.types";
import { v4 as uuid } from "uuid";
import { ChangeEvent, useState } from "react";
import "./NewTaskForm.css";
import { TimerInput } from "../../../components/timerInput/TimerInput";
import { isValidatePatternInput } from "../../../helpers/isValidatePatternInput";
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
    if (isValidatePatternInput(event)) {
      return;
    }

    const value = event.target.value;
    setTimerValue((prev) => ({ ...prev, sec: value }));
  }

  function validateMin(event: ChangeEvent<HTMLInputElement>) {
    if (isValidatePatternInput(event)) {
      return;
    }

    const value = event.target.value;
    setTimerValue((prev) => ({ ...prev, min: value }));
  }

  function createTask(event: React.KeyboardEvent<HTMLFormElement>) {
    event.preventDefault();

    if (value.trim() === "") {
      return;
    }

    const create = new Date();
    const timer: ITimer = convertTime(timerValue.min, timerValue.sec);
    const deadline = parserTimerIso(create, timer);

    const todo: ITask = {
      id: uuid(),
      todoName: value,
      create,
      isComplited: false,
      status: "none",
      filter: "all",
      pausePoint: Date.now(),
      pauseTimestamp: deadline.getTime() - Date.now(),
      pause: true,
      deadline,
    };

    setTodos((prev) => [...prev, todo]);
    setValue("");
    setTimerValue((prev) => {
      return { ...prev, min: "", sec: "" };
    });
  }

  function renderSubmit() {
    if (value.trim() !== "") {
      return (
        <button className="button-submit" type="submit">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
          >
            <path
              stroke="#1C274C"
              strokeLinecap="round"
              strokeWidth="1.5"
              d="M3 12v6.967c0 2.31 2.534 3.769 4.597 2.648l3.203-1.742M3 8V5.033c0-2.31 2.534-3.769 4.597-2.648l12.812 6.968a2.998 2.998 0 0 1 0 5.294l-6.406 3.484"
            />
          </svg>
        </button>
      );
    }
    return <button className="button-submit" type="submit"></button>;
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
        onChange={(event) => validateMin(event)}
        value={timerValue.min}
        maxLength={3}
        className="new-todo-form__timer"
        placeholder="Min"
      />
      <TimerInput
        mode="primary"
        required
        onChange={(event) => validateSec(event)}
        value={timerValue.sec}
        maxLength={3}
        className="new-todo-form__timer"
        placeholder="Sec"
      />
      {renderSubmit()}
    </form>
  );
}

export { NewTaskForm };
