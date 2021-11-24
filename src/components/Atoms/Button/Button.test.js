import { render, screen } from "@testing-library/react";
import Button from "./Button";

it("renders without crashing", () => {
  const buttonText = "Add Task";
  render(
    <Button onClick={() => console.log("Button clicked.")} label={buttonText}>
      {buttonText}
    </Button>
  );
  expect(screen.getByText(buttonText)).toBeInTheDocument();
});
