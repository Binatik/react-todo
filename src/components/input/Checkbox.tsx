import classNames from "classnames";
import { IInputProps } from "./Input.types";
import "./Checkbox.css";

function Checkbox({ mode, className, ...props }: IInputProps) {
  return (
    <>
      <input
        {...props}
        type="checkbox"
        className={classNames(className, {
          ["checkbox--toggle"]: mode === "primary",
        })}
      />
      <label></label>
    </>
  );
}

export { Checkbox };
