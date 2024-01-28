function validatePatternInput(
  event: React.KeyboardEvent<HTMLInputElement>,
  pattern: RegExp = /^[0-9\b]$/i,
) {
  if (event.key === "Backspace") {
    return;
  }

  if (!pattern.test(event.key)) {
    event.preventDefault();
  }
}

export { validatePatternInput };
