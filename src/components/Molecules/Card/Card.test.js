import { fireEvent, render, screen } from "@testing-library/react";
import Card from "./Card";
import { appData } from "../../../utils/data";

it("renders without crashing", () => {
  const { TASKS } = appData;
  let value = 0;
  const { container } = render(
    <Card
      task={TASKS[0]}
      assignee="Chenna Krishna"
      onClick={() => {
        value = 10;
      }}
    />
  );
  expect(screen.getByText(TASKS[0].title)).toBeInTheDocument();
  fireEvent.keyUp(container.querySelector("div"), {
    keyCode: 13,
  });
  expect(value).toEqual(10);
});
