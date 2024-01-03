import { List } from "../../../components/list/List";
import { Task } from "../Task/Task";
import { TasksFilter } from "../tasksFilter/TasksFilter";
import { ITaskFilter, ITodoProps } from "./todo.types";
import { useEffect, useState } from "react";

import "./Todo.css";

function Todo({setTodos, tasks}: ITodoProps) {
  const [filterTasks, setFilterTasks] = useState<ITaskFilter[]>([])

  function getNotComplitedTasks () {
    return tasks.filter((item) => !item.isComplited).length
  }

  useEffect(() => {
    setFilterTasks(tasks)
  }, [tasks]);
  

  useEffect(() => {
    if (tasks.length && tasks[0].filter === 'complited') {
      const complitedTasks = tasks.filter((task) => task.isComplited);
      setFilterTasks(complitedTasks)
    }

    if (tasks.length && tasks[0].filter === 'all') {
      setFilterTasks(tasks)
    }

    if (tasks.length && tasks[0].filter === 'active') {
      const activeTasks = tasks.filter((task) => task.status === 'edit');
      setFilterTasks(activeTasks)
    }
  }, [tasks]);


  return (
    <>
      <List mode="primary" className="todo-list">
        {filterTasks.length && filterTasks.map((task) => <Task key={task.id} task={task} setTodos={setTodos} />) || ''}
      </List>
      <TasksFilter tasks={tasks} setTodos={setTodos} counter={getNotComplitedTasks()} />
    </>
  );
}

export { Todo };
