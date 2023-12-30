import classNames from "classnames";
import { IInput } from "./Input.types";
import "./Checkbox.css";

function Checkbox({ mode, className, ...props }: IInput) {
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
