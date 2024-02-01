import { ChangeEvent } from "react";

function isValidatePatternInput(
  event: ChangeEvent<HTMLInputElement>,
  pattern: RegExp = /^\d*$/,
) {
  if (!pattern.test(event.target.value)) {
    return true;
  }
}

export { isValidatePatternInput };
