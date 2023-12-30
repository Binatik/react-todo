import classNames from "classnames";
import { IButtonEdit } from "./button.types";
import './Edit.css'

function Edit({ mode, size, className }: IButtonEdit) {
  return (
    <button
      className={classNames("icon-edit", className, {
        ["edit--primary"]: mode === "primary",
        ["edit--md"]: size === "md",
      })}
      type="button"
    ></button>
  );
}

export { Edit };
