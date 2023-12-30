import { IInput } from "./Input.types";
import classNames from "classnames";

function Input({ mode, className, ...props }: IInput) {
  return (
    <input
      {...props}
      type="text"
      className={classNames(className, {
        ["input--primary"]: mode === "primary",
      })}
    />
  );
}

export { Input };
