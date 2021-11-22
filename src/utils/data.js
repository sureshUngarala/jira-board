export const appData = (function () {
  const COLUMNS = [
    {
      id: "to-do",
      name: "To Do",
      tasks: ["abedsd", "xchjkfdh", "ojsfohee"], // tasks id from the tasks array
    },
    {
      id: "groomed",
      name: "Groomed",
      tasks: [],
    },
    {
      id: "in-progress",
      name: "In Progress",
      tasks: [],
    },
    {
      id: "in-review",
      name: "In Review",
      tasks: ["erknweruo"],
    },
    {
      id: "completed",
      name: "Completed",
      tasks: [],
    },
  ];

  const PRIORITIES = ["p1", "p2", "p3", "p4"];

  const USERS = [
    {
      id: "rxkargh",
      name: "Ritish Karki",
    },
    {
      id: "rhpatt",
      name: "Rahul Patel",
    },
    {
      id: "bchwal",
      name: "Bhuwan Chawla",
    },
    {
      id: "chafike",
      name: "Chennakrishna Gonuguntla",
    },
  ];

  let TASKS = [
    {
      id: "abedsd",
      title: "React development",
      description: "Sample description 1",
      assignee: "rxkargh", // user id
      priority: "p1", // from priorities array
      created_at: 1637108669287,
      updated_at: 1637108669287,
    },
    {
      id: "xchjkfdh",
      title: "Priority Task",
      description: "sample description 2",
      assignee: "chafike",
      priority: "p2",
      created_at: 1637098669287,
      updated_at: 1637098669287,
    },
    {
      id: "ojsfohee",
      title: "JIRA board",
      description: "sample description 3",
      assignee: "chafike",
      priority: "p3",
      created_at: 16370988869287,
      updated_at: 1637098899287,
    },
    {
      id: "erknweruo",
      title: "Task in review",
      description: "sample description 4",
      assignee: "rhpatt",
      priority: "p3",
      created_at: 16370988869287,
      updated_at: 1637098899287,
    },
  ];

  const NEW_TASK = {
    id: "",
    title: "",
    description: "",
    assignee: "",
    priority: "p4",
    created_at: 0,
    updated_at: 0,
  };

  const getTasks = () => TASKS;

  const updateTasks = (tasks) => {
    TASKS = tasks;
    return TASKS;
  };

  return { COLUMNS, PRIORITIES, USERS, TASKS, NEW_TASK, getTasks, updateTasks };
})();
