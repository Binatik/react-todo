import classNames from "classnames";
import { ITimerInputProps } from "./TimerInput.types";

function TimerInput({ mode, wide, className, ...props }: ITimerInputProps) {
  return (
    <input
      {...props}
      pattern="[0-9]*"
      type="text"
      className={classNames(className, {
        ["input--primary"]: mode === "primary",
        ["input--edit"]: mode === "edit",
        ["input--wide"]: wide,
      })}
    />
  );
}

export { TimerInput };
