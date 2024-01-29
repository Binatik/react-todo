import { useState } from "react";
import { Layout } from "../layout/Layout";
import { Todo } from "../module/todo/todo/Todo";
import { ITask } from "../module/todo/newTaskForm/newTaskForm.types";

function App() {
  const [todos, setTodos] = useState<ITask[]>([]);

  return (
    <>
      <section className="todoapp">
        <Layout setTodos={setTodos}>
          <Todo setTodos={setTodos} tasks={todos} />
        </Layout>
      </section>
    </>
  );
}

export { App };
