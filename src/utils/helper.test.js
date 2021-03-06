import {
  createOrUpdateTask,
  getTasksPerUser,
  tasksSummary,
  randomID,
} from "./helper";
import { appData } from "./data";

it("Segregate tasks per user per task-type", () => {
  const { USERS } = appData;
  const result = getTasksPerUser();
  expect(Object.keys(result).length).toEqual(USERS.length);
  expect(
    result[USERS[2].id].reduce((acc, tasks) => acc + tasks.length, 0)
  ).toEqual(0);
});

it("Provide task summary for a user", () => {
  const { USERS, COLUMNS } = appData;
  const result = getTasksPerUser();
  expect(tasksSummary(result[USERS[2].id], USERS[2].name)).toEqual(
    `${USERS[2].name} has no tasks assigned.`
  );
  expect(tasksSummary(result[USERS[1].id], USERS[1].name)).toEqual(
    `${USERS[1].name} has ${result[USERS[1].id][1].length} task in ${
      COLUMNS[1].name
    } status and ${result[USERS[1].id][3].length} task in ${
      COLUMNS[3].name
    } status.`
  );
});

it("Adds new task or updates existing task", () => {
  const { getTasks, NEW_TASK, TASKS } = appData;
  const task = { ...TASKS[0] };
  const title = "New Task from Jest";
  task["title"] = title;
  task["status"] = "in-progress";
  createOrUpdateTask(NEW_TASK);
  expect(getTasks().length).toEqual(TASKS.length + 1);
  createOrUpdateTask(task);
  expect(getTasks()[0].title).toEqual(title);
});

it("Generates a random ID of specified length", () => {
  expect(randomID(7).length).toEqual(7);
});
