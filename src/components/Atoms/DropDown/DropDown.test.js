import { render, screen } from "@testing-library/react";
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
  render(
    <DropDown
      fieldKey={fieldKey}
      dataKey={dataKey}
      values={values}
      defaultValue="2"
      onChange={console.log}
    />
  );
  expect(screen.getByText("name2")).toBeInTheDocument();
});
