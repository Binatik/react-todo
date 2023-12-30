import { List } from "../../../components/list/List"
import { Task } from "../Task/Task"
import './Todo.css'

function Todo () {
  return (
    <List className="todo-list">
      <Task />
    </List>
  )
}

export {Todo}