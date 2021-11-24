import { render, screen } from "@testing-library/react";
import Textarea from "./Textarea";

it("renders without crashing", () => {
  const dataKey = "id";
  let value = "description";
  render(
    <Textarea
      dataKey={dataKey}
      value={value}
      onChange={(dataKey, newVal) => {
        value = newVal;
      }}
    />
  );
  expect(screen.getByText(value)).toBeInTheDocument();
});
