import classNames from "classnames";
import { IButton } from "./button.types";
import "./Button.css";

function Button({ mode, size, children, className, ...props }: IButton) {
  return (
    <button
      {...props}
      className={classNames(className, {
        ["button--inline"]: mode === "inline",
        ["button--primary"]: mode === "primary",
        ["button--selected button--primary"]: mode === "selected",
        ["button--md"]: size === "md",
      })}
      type="button"
    >
      {children}
    </button>
  );
}

export { Button };
