import { Delete } from "../../../components/button/Delete";
import { Edit } from "../../../components/button/Edit";
import { Checkbox } from "../../../components/input/Checkbox";
import { Input } from "../../../components/input/Input";
import { ITask } from "./task.types";
import "./Task.css";

function Task({ cb, task }: ITask) {
  return (
    <li className="todo-item">
      {!task.isCoplited && (
        <div className="view">
          <Checkbox mode="primary" />
          <label className="todo">
            <span className="description">{task.todoName}</span>
            <span className="created">{task.create.toJSON()}</span>
          </label>
          <Edit className="todo--edit" mode="primary" size="md" />
          <Delete className="todo--delete" mode="primary" size="md" />
        </div>
      )}

      {task.isEdit && (
        <div className="view">
          <div className="view">
            <Input className="todo--edit-form" wide mode="edit" />
          </div>
        </div>
      )}
    </li>
  );
}

export { Task };
