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
  const { COLUMNS, getTasks, updateTasks, USERS } = appData;
  if (!taskObj.id) {
    taskObj.id = randomID(7);
    taskObj.created_at = new Date().getTime();
    taskObj.updated_at = new Date().getTime();
    if (!taskObj.assignee) {
      taskObj.assignee = USERS[0].id;
    }
    updateTasks([...getTasks(), taskObj]);
    COLUMNS.find(
      (column) => column.id === (taskObj.status || COLUMNS[0].id)
    ).tasks.push(taskObj.id);
  } else {
    const tasks = COLUMNS.find((column) => column.id === taskObj.status).tasks;
    if (tasks.indexOf(taskObj.id) === -1) {
      const prevColumn = COLUMNS.find(
        (column) => column.tasks.indexOf(taskObj.id) > -1
      );
      prevColumn.tasks.splice(prevColumn.tasks.indexOf(taskObj.id), 1);
      tasks.push(taskObj.id);
    }
    updateTasks(
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

export const tasksSummary = (tasks, userName) => {
  const { COLUMNS } = appData;
  const statuses = tasks?.reduce((acc, task, index) => {
    const tasksCount = task.length;
    if (tasksCount) {
      acc.push(
        `${tasksCount} ${tasksCount === 1 ? "task" : "tasks"} in ${
          COLUMNS[index].name
        } status`
      );
    }
    return acc;
  }, []);
  const statusesCount = statuses?.length;
  if (statusesCount) {
    return `${userName} has ${
      statusesCount > 1
        ? `${statuses.slice(0, statusesCount - 1).join(", ")} and ${
            statuses[statusesCount - 1]
          }`
        : statuses.join(", ")
    }.`;
  }
  return `${userName} has no tasks assigned.`;
};
