import { useState } from "react";
import PropTypes from "prop-types";
import styles from "./Form.module.scss";
import { appData } from "../../utils/data";

const Form = ({ editing, task, updateTaskProp }) => {
  const {
    title,
    description,
    assignee,
    priority,
    status,
    created_at,
    updated_at,
  } = task;
  const { COLUMNS, PRIORITIES, USERS } = appData;
  return (
    <form className={styles.form}>
      <aside>
        <label className={styles.title}>
          <span>Title</span>
          <input
            type="text"
            value={title}
            disabled={!editing}
            onChange={({ target: { value } }) => updateTaskProp("title", value)}
          />
        </label>
        <label className={styles.description}>
          <span>Description</span>
          <textarea
            type="text"
            value={description}
            disabled={!editing}
            onChange={({ target: { value } }) =>
              updateTaskProp("description", value)
            }
          />
        </label>
      </aside>
      <aside>
        <label className={styles.status}>
          <span>Status</span>
          <select
            defaultValue={status}
            disabled={!editing}
            onChange={({ target: { value } }) =>
              updateTaskProp("status", value)
            }
          >
            {COLUMNS.map((column) => (
              <option key={column.id} value={column.id}>
                {column.name}
              </option>
            ))}
          </select>
        </label>
        <label className={styles.assignee}>
          <span>Assignee</span>
          <select
            defaultValue={USERS.find((user) => user.id === assignee)?.name}
            disabled={!editing}
            onChange={({ target: { value } }) =>
              updateTaskProp("assignee", value)
            }
          >
            {USERS.map((user) => (
              <option key={user.id} value={user.id}>
                {user.name}
              </option>
            ))}
          </select>
        </label>
        <label className={styles.priority}>
          <span>Priority</span>
          <select
            defaultValue={priority}
            className={styles.priority}
            disabled={!editing}
            onChange={({ target: { value } }) =>
              updateTaskProp("priority", value)
            }
          >
            {PRIORITIES.map((priority) => (
              <option key={priority} value={priority}>
                {priority}
              </option>
            ))}
          </select>
        </label>
        <label className={styles.createdOn}>
          <span>Created On</span>
          <span disabled={!editing}>
            {(created_at ? new Date(created_at) : new Date()).toDateString()}
          </span>
        </label>
        <label className={styles.updatedOn}>
          <span>Updated On</span>
          <span disabled={!editing}>
            {(updated_at ? new Date(updated_at) : new Date()).toDateString()}
          </span>
        </label>
      </aside>
    </form>
  );
};

Form.propTypes = {
  editing: PropTypes.bool.isRequired,
  task: PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    assignee: PropTypes.string.isRequired,
    priority: PropTypes.string.isRequired,
    created_at: PropTypes.number.isRequired,
    updated_at: PropTypes.number.isRequired,
  }).isRequired,
  updateTaskProp: PropTypes.func.isRequired,
};
export default Form;
