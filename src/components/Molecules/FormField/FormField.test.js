import { render, screen } from "@testing-library/react";
import FormField from "./FormField";

it("renders without crashing", () => {
  let title = "Test title";
  render(
    <FormField title={title}>
      <input type="text" />
    </FormField>
  );
  expect(screen.getByText(title)).toBeInTheDocument();
});
