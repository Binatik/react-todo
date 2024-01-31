import { ChangeEvent } from "react";

type IEvent =
  | React.KeyboardEvent<HTMLInputElement>
  | ChangeEvent<HTMLInputElement>;

function validatePatternInput(event: IEvent, pattern: RegExp = /^[0-9\b]$/i) {
  if ("key" in event) {
    if (event.key === "Backspace") {
      return;
    }

    if (!pattern.test(event.key)) {
      event.preventDefault();
    }
    return;
  }

  if (!pattern.test(event.target.value)) {
    event.preventDefault();
  }
}

export { validatePatternInput };
