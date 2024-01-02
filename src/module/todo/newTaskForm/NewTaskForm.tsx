import { Input } from "../../../components/input/Input";
import { ITask, INewTaskFormProps } from "./newTaskForm.types";
import { v4 as uuid } from "uuid";
import "./NewTaskForm.css";

function NewTaskForm({ setTodos }: INewTaskFormProps) {
  function handleKeyDown(event: React.KeyboardEvent<HTMLInputElement>) {
    if (event.currentTarget.value.trim() === '') {
      return;
    }

    const todo: ITask = {
      id: uuid(),
      todoName: event.currentTarget.value,
      create: new Date(),
      isComplited: false,
      status: "none",
      filter: 'all'
    };

    if (event.code === "Enter") {
      setTodos((prev) => [...prev, todo]);
    }
  }

  return <Input onKeyDown={handleKeyDown} mode="primary" wide className="new-todo" placeholder="What needs to be done?" />;
}

export { NewTaskForm };
