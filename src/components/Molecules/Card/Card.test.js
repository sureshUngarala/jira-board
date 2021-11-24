import { render, screen } from "@testing-library/react";
import Card from "./Card";
import { appData } from "../../../utils/data";

it("renders without crashing", () => {
  const { TASKS } = appData;
  render(
    <Card task={TASKS[0]} assignee="Chenna Krishna" onClick={console.log} />
  );
  expect(screen.getByText(TASKS[0].title)).toBeInTheDocument();
});
