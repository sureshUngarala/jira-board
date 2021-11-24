import { render, screen } from "@testing-library/react";
import Modal from "./Modal";
import { appData } from "../../../utils/data";

it("renders without crashing", () => {
  const { TASKS } = appData;
  render(
    <Modal
      task={TASKS[0]}
      onClose={console.log}
      onSubmit={console.log}
      newTask={false}
      canEdit={true}
    />
  );
  expect(screen.getByText(TASKS[0].description)).toBeInTheDocument();
});
