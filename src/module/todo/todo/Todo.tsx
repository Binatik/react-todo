import { List } from "../../../components/list/List";
import { Task } from "../Task/Task";
import { TasksFilter } from "../tasksFilter/TasksFilter";
import "./Todo.css";
import { ITodo } from "./todo.types";

function Todo({cb, tasks}: ITodo) {
  return (
    <>
      <List mode="primary" className="todo-list">
        {tasks?.length && tasks.map((task) => <Task key={task.id} task={task} cb={cb} />) || ''}
      </List>
      <TasksFilter />
    </>
  );
}

export { Todo };
