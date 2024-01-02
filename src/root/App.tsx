import { useState } from "react";
import { Layout } from "../layout/Layout";
import { Todo } from "../module/todo/todo/Todo";
import { INewTask } from "../module/todo/newTaskForm/newTaskForm.types";

function App() {
  const [todos, setTodos] = useState<INewTask[]>([])

  return (
    <>
      <section className="todoapp">
        <Layout cb={setTodos}> 
          <Todo cb={setTodos} tasks={todos} />
        </Layout>
      </section>
    </>
  );
}

export { App };
