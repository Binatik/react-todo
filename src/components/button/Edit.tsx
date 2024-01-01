import classNames from "classnames";
import { IButtonEdit } from "./button.types";
import "./Edit.css";

function Edit({ mode, size, className, ...props }: IButtonEdit) {
  return (
    <button
      {...props}
      className={classNames("icon-edit", className, {
        ["edit--primary"]: mode === "primary",
        ["edit--md"]: size === "md",
      })}
      type="button"
    ></button>
  );
}

export { Edit };
