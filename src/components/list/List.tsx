import classNames from "classnames";
import { IList } from "./list.types";

import "./List.css";

function List({ children, mode, className }: IList) {
  return (
    <ul
      className={classNames(className, {
        ["list--primary"]: mode === "primary",
      })}
    >
      {children}
    </ul>
  );
}

export { List };
