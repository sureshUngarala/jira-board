import { fireEvent, render, screen } from "@testing-library/react";
import DropDown from "./Dropdown";

it("renders without crashing", () => {
  const fieldKey = "name";
  const dataKey = "id";
  const values = [
    {
      id: "1",
      name: "name1",
    },
    {
      id: "2",
      name: "name2",
    },
  ];
  let defaultValue = "2";
  const { container } = render(
    <DropDown
      fieldKey={fieldKey}
      dataKey={dataKey}
      values={values}
      defaultValue={defaultValue}
      onChange={(dataKey, newVal) => {
        defaultValue = newVal;
      }}
    />
  );
  expect(screen.getByText("name2")).toBeInTheDocument();
  fireEvent.change(container.querySelector("select"), {
    target: { value: "1" },
  });
  expect(defaultValue).toEqual("1");
});
