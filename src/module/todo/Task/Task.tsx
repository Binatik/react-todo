import { Delete } from "../../../components/button/Delete";
import { Edit } from "../../../components/button/Edit";
import { Checkbox } from "../../../components/input/Checkbox";
import { Input } from "../../../components/input/Input";
import { ITaskProps } from "./task.types";
import { ITask } from "../newTaskForm/newTaskForm.types";
import { formatDistanceToNow } from "date-fns/formatDistanceToNow";
import classNames from "classnames";
import "./Task.css";

function Task({ setTodos, task }: ITaskProps) {
  const timeAgo = formatDistanceToNow(task.create, { addSuffix: true, includeSeconds: true });


  function updateComplited(id: typeof task.id) {
    setTodos((prev) => {
      const newState = prev.map((item) => {
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
      const value = event.currentTarget.value;

      setTodos((prev) => {
        const newState = prev.map<ITask>((item) => {
          if (item.id === id) {
            return { ...item, todoName: value, status: "none", create: new Date() };
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

  return (
    <li className="todo-item">
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
            <span className="created">{`created ${timeAgo}`}</span>
          </label>
          <Edit onClick={() => updateEdit(task.id)} className="todo--edit" mode="primary" size="md" />
          <Delete onClick={() => deleteTask(task.id)} className="todo--delete" mode="primary" size="md" />
        </div>
      )}

      {task.status === "edit" && (
        <div className="view">
          <Input onKeyDown={(event) => updateTodo(event, task.id)} className="todo--edit-form" wide mode="edit" />
        </div>
      )}
    </li>
  );
}

export { Task };
