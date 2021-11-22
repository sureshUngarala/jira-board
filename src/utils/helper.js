import { appData } from "./data.js";

export const getTasksPerUser = () => {
  const { COLUMNS, getTasks, USERS } = appData;
  const tasks = getTasks().reduce((acc, task) => {
    acc[task.id] = task;
    return acc;
  }, {});

  const op = USERS.reduce((acc, user) => {
    const tasksPerAssignee = [];
    COLUMNS.forEach((column, columnIndex) => {
      const tasksPerType = tasksPerAssignee[columnIndex] || [];
      column.tasks.forEach((taskId) =>
        tasks[taskId]?.assignee === user.id
          ? tasksPerType.push({ ...tasks[taskId], status: column.id })
          : tasksPerType
      );
      tasksPerAssignee.push(tasksPerType);
    });
    acc[user.id] = tasksPerAssignee;
    return acc;
  }, {});
  return op;
};

export const createOrUpdateTask = (taskObj) => {
  const { COLUMNS, getTasks, updateTasks } = appData;
  if (!taskObj.id) {
    taskObj.id = randomID(7);
    taskObj.created_at = new Date().getTime();
    taskObj.updated_at = new Date().getTime();
    updateTasks([...getTasks(), taskObj]);
    COLUMNS.find((column) => column.id === taskObj.status).tasks.push(
      taskObj.id
    );
  } else {
    return updateTasks(
      getTasks().reduce((acc, task) => {
        if (task.id === taskObj.id) {
          acc.push(taskObj);
        } else {
          acc.push(task);
        }
        return acc;
      }, [])
    );
  }
};

export const randomID = (length) => {
  var id = "";
  var characters = "abcdefghijklmnopqrstuvwxyz";
  var charactersLength = characters.length;
  for (var i = 0; i < length; i++) {
    id += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return id;
};
