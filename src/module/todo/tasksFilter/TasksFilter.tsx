import { Button } from "../../../components/button/Button";
import { List } from "../../../components/list/List";
import { ITasksFilter } from "./tasksFilter.types";
import "./TasksFilter.css";

function TasksFilter({setTodos, counter}: ITasksFilter) {
  function setComplited() {
    setTodos((prev) => prev.map((item) => {
      return {...item, filter: 'complited'}
    }))
  }

  function setActive() {
    setTodos((prev) => prev.map((item) => {
      return {...item, filter: 'active'}
    }))
  }

  function setAll() {
    setTodos((prev) => prev.map((item) => {
      return {...item, filter: 'all'}
    }))
  }

  function clearComplited() {
    setTodos((prev) => prev.map((item) => {
      return {...item, filter: 'clearComplited'}
    }))
  }
  
  return (
    <div className="footer">
      <span className="todo-count">{counter} items left</span>
      <List className="filters" mode="primary">
        <li>
          <Button onClick={setAll} size="md" mode="primary">
            All
          </Button>
        </li>
        <li>
          <Button onClick={setActive} size="md" mode="primary">
            Active
          </Button>
        </li>
        <li>
          <Button onClick={setComplited} size="md" mode="primary">
            Complited
          </Button>
        </li>
      </List>
      <Button onClick={clearComplited} size="md" mode="inline">
        Clear completed
      </Button>
    </div>
  );
}

export { TasksFilter };
