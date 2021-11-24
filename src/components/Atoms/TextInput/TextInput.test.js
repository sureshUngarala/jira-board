import { fireEvent, render } from "@testing-library/react";
import TextInput from "./TextInput";

it("renders without crashing", () => {
  const dataKey = "id";
  let value = "title";
  let newVal = "new title";
  const { container } = render(
    <TextInput
      dataKey={dataKey}
      value={value}
      onChange={(dataKey, newVal) => {
        value = newVal;
      }}
    />
  );
  fireEvent.change(container.querySelector("input"), {
    target: { value: newVal },
  });
  expect(value).toEqual(newVal);
});
