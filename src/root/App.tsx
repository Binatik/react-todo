import { useState } from "react";
import { Layout } from "../layout/Layout";
import { Todo } from "../module/todo/todo/Todo";
import { INewTask } from "../module/todo/newTaskForm/newTaskForm.types";

function App() {
  const [todos, setTodos] = useState<INewTask[] | undefined>([])

  console.log(todos)

  return (
    <>
      <section className="todoapp">
        <Layout cb={setTodos}>
          <Todo />
        </Layout>
      </section>
    </>
  );
}

export { App };
