import { render, screen } from "@testing-library/react";
import Form from "./Form";
import { appData } from "../../../utils/data";

it("renders without crashing", () => {
  const { TASKS } = appData;
  render(<Form task={TASKS[0]} updateTaskProp={console.log} editing={true} />);
  expect(screen.getByText(TASKS[0].description)).toBeInTheDocument();
});
