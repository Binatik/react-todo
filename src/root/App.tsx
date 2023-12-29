import { Layout } from "../layout/Layout"

function App() {

  return (
    <>
     <section className="todoapp">
      <Layout>
        <ul className="todo-list">
          <li className="completed"></li>
          <li className="editing"></li>
          <li></li>
        </ul>
      </Layout>
     </section>
    </>
  )
}

export {App}
