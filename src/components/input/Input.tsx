import { IInput } from "./Input.types";
import classNames from "classnames";
import "./Input.css";

function Input({ mode, wide, className, ...props }: IInput) {
  return (
    <input
      {...props}
      type="text"
      className={classNames(className, {
        ["input--primary"]: mode === "primary",
        ["input--edit"]: mode === "edit",
        ["input--wide"]: wide,
      })}
    />
  );
}

export { Input };
