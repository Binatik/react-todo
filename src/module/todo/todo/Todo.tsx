import { List } from "../../../components/list/List";
import { Task } from "../Task/Task";
import { TasksFilter } from "../tasksFilter/TasksFilter";
import "./Todo.css";

function Todo() {
  return (
    <>
      <List mode="primary" className="todo-list">
        <Task />
      </List>
      <TasksFilter />
    </>
  );
}

export { Todo };
