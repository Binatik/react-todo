import { ChangeEvent } from "react";

type IEvent =
  | React.KeyboardEvent<HTMLInputElement>
  | ChangeEvent<HTMLInputElement>;

function isValidatePatternInput(event: IEvent, pattern: RegExp = /^\d*$/) {
  if ("key" in event) {
    if (event.key === "Backspace") {
      return;
    }

    if (!pattern.test(event.key)) {
      event.preventDefault();
    }
    return;
  } else {
    if (!event.target.value.match(pattern)) {
      event.preventDefault();
      return true;
    }
  }
}

export { isValidatePatternInput };
