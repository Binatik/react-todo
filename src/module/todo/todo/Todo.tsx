import { List } from "../../../components/list/List";
import { Task } from "../Task/Task";
import { TasksFilter } from "../tasksFilter/TasksFilter";
import { ITodoProps } from "./todo.types";
import { useMemo } from "react";
import "./Todo.css";

function Todo({ setTodos, tasks }: ITodoProps) {
  const filterTasks = useMemo(() => {
    if (!tasks.length) {
      return tasks;
    }

    const filter = tasks[0].filter;

    if (filter === "complited") {
      return tasks.filter((task) => task.isComplited);
    } else if (filter === "all") {
      return tasks;
    } else if (filter === "active") {
      return tasks.filter((task) => !task.isComplited);
    }

    return [];
  }, [tasks]);

  const notComplitedTasks = useMemo(() => getNotComplitedTasks(), [tasks]);

  function getNotComplitedTasks() {
    return tasks.filter((item) => !item.isComplited).length;
  }

  function renderTask() {
    if (!tasks.length) {
      return <span className="todo-init">Вы пока не создали задачу!</span>;
    }

    return filterTasks.map((task) => (
      <li key={task.id} className="todo-item">
        <Task task={task} setTodos={setTodos} />
      </li>
    ));
  }

  return (
    <>
      <List mode="primary" className="todo-list">
        {renderTask()}
      </List>
      <TasksFilter
        tasks={tasks}
        setTodos={setTodos}
        counter={notComplitedTasks}
      />
    </>
  );
}

export { Todo };
