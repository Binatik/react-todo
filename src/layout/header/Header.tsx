import { NewTaskForm } from "../../module/todo/newTaskForm/NewTaskForm";
import { IHeaderProps } from "./header.types";

function Header({ setTodos }: IHeaderProps) {
  return (
    <header>
      <h1>todos</h1>
      <NewTaskForm setTodos={setTodos} />
    </header>
  );
}

export { Header };
