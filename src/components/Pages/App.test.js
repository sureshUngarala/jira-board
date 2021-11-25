import { fireEvent, render, screen } from "@testing-library/react";
import App from "./App";
import { appData } from "../../utils/data";

it("renders without crashing and opens modal on clicking task card", () => {
  const addBtnText = "+ Create New";
  const { TASKS } = appData;
  const { container } = render(<App />);
  expect(screen.getByText(addBtnText)).toBeInTheDocument();
  fireEvent.click(screen.getByText(addBtnText));
  expect(container.querySelector('[aria-label="Edit Task"]')).toBeNull();
  fireEvent.change(screen.getByLabelText("Title"), {
    target: { value: "New jest title from App" },
  });
  fireEvent.change(screen.getByLabelText("Description"), {
    target: { value: "New jest description from App" },
  });
  fireEvent.click(container.querySelector('[aria-label="Save Task"]'));
  fireEvent.click(
    container.querySelector(
      `[aria-label="${TASKS[0].title}. Click to view or edit task details."]`
    )
  );
  expect(container.querySelector("[aria-modal=true]")).toBeInTheDocument();
});
