import { Layout } from "../layout/Layout";
import { Todo } from "../module/todo/todo/Todo";

function App() {
  return (
    <>
      <section className="todoapp">
        <Layout>
          <Todo />
        </Layout>
      </section>
    </>
  );
}

export { App };
