import { Checkbox } from "../../../components/input/checkbox"
import './Task.css'

function Task () {
  return (
    <li className="todo-item completed">
    <div className="view">
      <Checkbox mode="primary" />
      <label className="todo">
        <span className="description">Active task</span>
        <span className="created">created 5 minutes ago</span>
      </label>
    </div>
  </li>
  )
}

export {Task}