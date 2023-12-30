import classNames from "classnames";
import { IButtonDelete } from "./button.types";
import './Delete.css'

function Delete({ mode, size, className }: IButtonDelete) {
  return (
    <button
      className={classNames("icon-delete", className, {
        ["delete--primary"]: mode === "primary",
        ["delete--md"]: size === "md",
      })}
      type="button"
    ></button>
  );
}

export { Delete };