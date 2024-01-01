import { NewTaskForm } from "../../module/todo/newTaskForm/NewTaskForm";
import { IHeader } from "./header.types";

function Header({cb}: IHeader) {
  return (
    <header>
      <h1>todos</h1>
      <NewTaskForm cb={cb}  />
    </header>
  );
}

export { Header };
