import classNames from "classnames";
import { IList } from "./list.types";

function List({ children, mode, className }: IList) {
  return (
    <ul
      className={classNames(className, {
        ["ul--primary"]: mode === "primary",
      })}
    >
      {children}
    </ul>
  );
}

export { List };
