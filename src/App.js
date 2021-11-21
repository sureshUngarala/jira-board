import { useEffect, useState } from "react";
import AddButton from "./components/Buttons/Add/AddButton.jsx";
import Card from "./components/Card/Card.jsx";
import Modal from "./components/Modal/Modal";
import { COLUMNS, USERS } from "./utils/constants.js";
import { getTasksPerUser } from "./utils/helper.js";
import "./App.scss";

function App() {
  const [tasksPerUser, setTasksPerUser] = useState({});
  useEffect(() => {
    setTasksPerUser(getTasksPerUser());
  }, []);

  return (
    <div className="App">
      <Modal />
      <AddButton
        onClick={() => {
          console.log(console.log("Clicked Add button"));
        }}
      />
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
                {tasksPerUser[user.id]?.map((tasks, typeIndex) => (
                  <li key={`${user.id}#${typeIndex}`}>
                    {tasks.map((task) => (
                      <Card
                        id={task.id}
                        title={task.title}
                        priority={task.priority}
                        assignee={user.name}
                        key={task.id}
                      />
                    ))}
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
