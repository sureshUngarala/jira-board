import { fireEvent, render, screen } from "@testing-library/react";
import Textarea from "./Textarea";

it("renders without crashing", () => {
  const dataKey = "id";
  let value = "description";
  let newVal = "new description";
  const { container } = render(
    <Textarea
      dataKey={dataKey}
      value={value}
      onChange={(dataKey, newVal) => {
        value = newVal;
      }}
    />
  );
  expect(screen.getByText(value)).toBeInTheDocument();
  fireEvent.change(container.querySelector("textarea"), {
    target: { value: newVal },
  });
  expect(value).toEqual(newVal);
});
