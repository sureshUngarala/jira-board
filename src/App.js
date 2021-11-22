import { useEffect, useState } from "react";
import AddButton from "./components/Buttons/Add/AddButton.jsx";
import Card from "./components/Card/Card.jsx";
import Modal from "./components/Modal/Modal";
import { appData } from "./utils/data.js";
import { getTasksPerUser, createOrUpdateTask } from "./utils/helper.js";
import "./App.scss";

function App() {
  const { COLUMNS, getTasks, NEW_TASK, USERS } = appData;
  const [tasksPerUser, setTasksPerUser] = useState({});
  const [modalProps, setModalProps] = useState({
    showModal: false,
    task: getTasks()[0],
    canEdit: true,
    newTask: false,
  });

  const openModal = (newTask, task) => {
    setModalProps({
      showModal: true,
      task: task || NEW_TASK,
      canEdit: true,
      newTask,
    });
  };

  const closeModal = () => {
    setModalProps({ ...modalProps, showModal: false });
  };

  const updateTasksData = (newTask) => {
    createOrUpdateTask(newTask);
    setTasksPerUser(getTasksPerUser());
    closeModal();
  };

  useEffect(() => {
    setTasksPerUser(getTasksPerUser());
  }, []);

  const listTasks = (user) =>
    tasksPerUser[user.id]?.map((tasks, typeIndex) => (
      <li
        key={`${user.id}#${typeIndex}`}
        className={tasks.length === 0 ? "no-tasks" : ""}
      >
        {tasks.length > 0 &&
          tasks.map((task) => (
            <Card
              task={task}
              assignee={user.name}
              key={task.id}
              onClick={() => {
                openModal(false, task);
              }}
            />
          ))}
        {tasks.length === 0 && <span>No assigned tasks with this status.</span>}
      </li>
    ));

  return (
    <div className="App">
      <AddButton onClick={() => openModal(true)} />
      <div className="columns">
        <ul className="column-headers">
          {COLUMNS.map((column) => (
            <li className="column-header" key={column.id}>
              {column.name}
            </li>
          ))}
        </ul>
        <ul className="users">
          {USERS.map((user) => (
            <li key={user.id} className="user-content">
              {user.name}
              <ul key={user.name} className="tasksPerType">
                {listTasks(user)}
              </ul>
            </li>
          ))}
        </ul>
      </div>

      {modalProps.showModal && (
        <Modal
          canEdit={modalProps.canEdit}
          task={modalProps.task}
          onClose={closeModal}
          newTask={modalProps.newTask}
          onSubmit={updateTasksData}
        />
      )}
    </div>
  );
}

export default App;
