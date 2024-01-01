import { Delete } from "../../../components/button/Delete";
import { Edit } from "../../../components/button/Edit";
import { Checkbox } from "../../../components/input/Checkbox";
import { Input } from "../../../components/input/Input";
import { ITask } from "./task.types";
import classNames from "classnames";
import "./Task.css";

function Task({ cb, task }: ITask) {
  function updateComplited(id: typeof task.id) {
    cb((prev) => {
      const newState = prev?.map((item) => {
        if (item.id === id) {
          return { ...item, isCoplited: !item.isCoplited };
        }
        return item;
      });
      return newState;
    });
  }

  function updateEdit(id: typeof task.id) {
    cb((prev) => {
      const newState = prev?.map((item) => {
        if (item.id === id) {
          return { ...item, isEdit: true };
        }
        return item;
      });
      return newState;
    });
  }

  function updateTodo (event: React.KeyboardEvent<HTMLInputElement>, id: typeof task.id) {
    if (event.code === "Enter") {
      const value = event.currentTarget.value

      cb((prev) => {
        const newState = prev?.map((item) => {
          if (item.id === id) {
            return { ...item, todoName: value, create: new Date, isEdit: false };
          }
          return item;
        });
        return newState;
      });
    }
  }

  function deleteTask(id: typeof task.id) {
    cb((prev) => prev?.filter((item) => item.id !== id));
  }

  return (
    <li className="todo-item">
      {!task.isEdit && (
        <div className="view">
          <Checkbox onClick={() => updateComplited(task.id)} mode="primary" />
          <label className="todo">
            <span
              className={classNames("description", {
                ["complited"]: task.isCoplited,
              })}
            >
              {task.todoName}
            </span>
            <span className="created">{task.create.toJSON()}</span>
          </label>
          <Edit onClick={() => updateEdit(task.id)} className="todo--edit" mode="primary" size="md" />
          <Delete onClick={() => deleteTask(task.id)} className="todo--delete" mode="primary" size="md" />
        </div>
      )}

      {task.isEdit && (
        <div className="view">
          <Input onKeyDown={(event) => updateTodo(event, task.id)} className="todo--edit-form" wide mode="edit" />
        </div>
      )}
    </li>
  );
}

export { Task };
