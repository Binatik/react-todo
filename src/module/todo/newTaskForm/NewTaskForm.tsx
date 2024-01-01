import { Input } from "../../../components/input/Input";
import { INewTask, INewTaskForm } from "./newTaskForm.types";
import { v4 as uuid } from "uuid";
import "./NewTaskForm.css";

function NewTaskForm({ cb }: INewTaskForm) {
  function handleKeyDown(event: React.KeyboardEvent<HTMLInputElement>) {
    const todo: INewTask = {
      id: uuid(),
      todoName: event.currentTarget.value,
      isEdit: false,
      isCoplited: false,
      create: new Date(),
    };

    if (event.code === "Enter") {
      cb((prev) => [...(prev || []), todo]);
    }
  }

  return <Input onKeyDown={handleKeyDown} mode="primary" wide className="new-todo" placeholder="What needs to be done?" />;
}

export { NewTaskForm };
