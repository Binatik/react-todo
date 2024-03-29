import { IInputProps } from "./Input.types";
import classNames from "classnames";
import "./Input.css";

function Input({ mode, wide, className, ...props }: IInputProps) {
  return (
    <input
      {...props}
      className={classNames(className, {
        ["input--primary"]: mode === "primary",
        ["input--edit"]: mode === "edit",
        ["input--wide"]: wide,
      })}
    />
  );
}

export { Input };
