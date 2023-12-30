import { NewTaskForm } from "../../module/todo/newTaskForm/NewTaskForm";

function Header() {
  return (
    <header>
      <h1>todos</h1>
      <NewTaskForm />
    </header>
  );
}

export { Header };
