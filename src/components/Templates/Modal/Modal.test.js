import { fireEvent, render, screen } from "@testing-library/react";
import Modal from "./Modal";
import { appData } from "../../../utils/data";

it("renders without crashing", () => {
  const { TASKS } = appData;
  let value = 0;
  const { container } = render(
    <Modal
      task={TASKS[0]}
      onClose={() => {
        value = 10;
      }}
      onSubmit={() => {
        value = 20;
      }}
      newTask={false}
      canEdit={true}
    />
  );
  expect(screen.getByText(TASKS[0].description)).toBeInTheDocument();
  fireEvent.click(container.querySelector('[aria-label="Close Modal"]'));
  expect(value).toEqual(10);
  fireEvent.click(container.querySelector('[aria-label="Edit Task"]'));
  fireEvent.click(container.querySelector('[aria-label="Save Task"]'));
  expect(value).toEqual(20);
  fireEvent.change(screen.getByLabelText("Description"), {
    target: { value: "New jest description" },
  });
});
