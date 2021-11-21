import { COLUMNS, TASKS, USERS } from "./constants.js";

export const getTasksPerUser = () => {
  console.log("Calling getTasksPerUser...");
  const tasks = TASKS.reduce((acc, task) => {
    acc[task.id] = task;
    return acc;
  }, {});
  const users = USERS.reduce((acc, user) => {
    acc[user.id] = user;
    return acc;
  }, {});

  const op = USERS.reduce((acc, user) => {
    const tasksPerAssignee = [];
    COLUMNS.forEach((column, columnIndex) => {
      const tasksPerType = tasksPerAssignee[columnIndex] || [];
      column.tasks.forEach((taskId) =>
        tasks[taskId]?.assignee === user.id
          ? tasksPerType.push(tasks[taskId])
          : tasksPerType
      );
      tasksPerAssignee.push(tasksPerType);
    });
    acc[user.id] = tasksPerAssignee;
    return acc;
  }, {});
  console.log("op ", op);
  return op;
};
