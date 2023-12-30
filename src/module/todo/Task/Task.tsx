import { Delete } from "../../../components/button/Delete";
import { Edit } from "../../../components/button/Edit";
import { Checkbox } from "../../../components/input/Checkbox";
import "./Task.css";

function Task() {
  return (
    <li className="todo-item completed">
      <div className="view">
        <Checkbox mode="primary" />
        <label className="todo">
          <span className="description">Active task</span>
          <span className="created">created 5 minutes ago</span>
        </label>
        <Edit className="todo--edit" mode="primary" size="md" />
        <Delete className="todo--delete" mode="primary" size="md" />
      </div>
    </li>
  );
}

export { Task };
