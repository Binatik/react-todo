import { Delete } from "../../../components/button/Delete";
import { Edit } from "../../../components/button/Edit";
import { Checkbox } from "../../../components/input/Checkbox";
import { Input } from "../../../components/input/Input";
import { ITaskProps } from "./task.types";
import { ITask } from "../newTaskForm/newTaskForm.types";
import { formatDistanceToNow } from "date-fns/formatDistanceToNow";
import classNames from "classnames";
import { useState } from "react";
import { Timer } from "../../../components/timer/Timer";
import "./Task.css";

function Task({ setTodos, task }: ITaskProps) {
  const [value, setValue] = useState(task.todoName);
  const [hasDeadline, setHasDeadline] = useState(false)

  const timeAgo = formatDistanceToNow(task.create, {
    addSuffix: true,
    includeSeconds: true,
  });

  const duration = task.pauseTimestamp
    ? task.pauseTimestamp
    : task.deadline.getTime() - Date.now()

  function updateComplited(id: typeof task.id) {
    setTodos((prev) => {
      const newState = prev.map<ITask>((item) => {
        if (item.id === id) {
          return { ...item, isComplited: !item.isComplited };
        }
        return item;
      });
      return newState;
    });
  }

  function updateEdit(id: typeof task.id) {
    setTodos((prev) => {
      const newState = prev.map<ITask>((item) => {
        if (item.id === id) {
          return { ...item, status: "edit" };
        }
        return item;
      });
      return newState;
    });
  }

  function updateTodo(event: React.KeyboardEvent<HTMLInputElement>, id: typeof task.id) {
    if (event.code === "Enter") {
      if (value === "") {
        return;
      }

      setTodos((prev) => {
        const newState = prev.map<ITask>((item) => {
          if (item.id === id) {
            return {
              ...item,
              todoName: value,
              status: "none",
              create: new Date(),
            };
          }
          return item;
        });
        return newState;
      });
    }
  }

  function deleteTask(id: typeof task.id) {
    setTodos((prev) => prev.filter((item) => item.id !== id));
  }

  function onResume() {
    if (!task.pausePoint) {
      return
    }

    const pauseDuration = Date.now() - task.pausePoint;
    const newDeadline = new Date(task.deadline.setTime(task.deadline.getTime() + pauseDuration));

    setTodos((prev) => {
      return prev.map<ITask>((item) => {
        if (item.id === task.id) {
          return { ...item, pausePoint: null, pauseTimestamp: null, pause: false, deadline: newDeadline }
        }
        return item
      })
    })
  }

  function onPause(timestamp: number) {
    setTodos((prev) => {
      return prev.map<ITask>((item) => {
        if (item.id === task.id) {
          return {
            ...item,
            pausePoint: Date.now(), pauseTimestamp: timestamp, pause: true
          }
        }
        return item
      })
    })
  }

  function onEnd() {
    setHasDeadline(true)
  }

  function renderTimer() {
    if (hasDeadline && !task.isComplited) {
      return (<span className="timer__off">Время истекло</span>)
    }

    if (hasDeadline && task.isComplited) {
      return (<span className="timer__off">Complited</span>)
    }

    return (<Timer
      pause={task.pause}
      onPause={onPause}
      onResume={onResume}
      onEnd={onEnd}
      mode="primary"
      duration={duration} />)
  }

  return (
    <>
      {task.status === "none" && (
        <div className="view">
          <Checkbox defaultChecked={task.isComplited} onClick={() => updateComplited(task.id)} mode="primary" />
          <label className="todo">
            <span
              className={classNames("description", {
                ["complited"]: task.isComplited,
              })}
            >
              {task.todoName}
            </span>
            {renderTimer()}
            <span className="created">{`created ${timeAgo}`}</span>
          </label>
          <Edit onClick={() => updateEdit(task.id)} className="todo--edit" mode="primary" size="md" />
          <Delete onClick={() => deleteTask(task.id)} className="todo--delete" mode="primary" size="md" />
        </div>
      )}

      {task.status === "edit" && (
        <div className="view">
          <Input
            onChange={(event) => setValue(event.currentTarget.value)}
            onKeyDown={(event) => updateTodo(event, task.id)}
            className="todo--edit-form"
            wide
            mode="edit"
            value={value}
          />
        </div>
      )}
    </>
  );
}

export { Task };
