import PropTypes from "prop-types";
import FormField from "../../Molecules/FormField/FormField";
import styles from "./Form.module.scss";
import { appData } from "../../../utils/data";
import TextInput from "../../Atoms/TextInput/TextInput";
import Textarea from "../../Atoms/Textarea/Textarea";
import DropDown from "../../Atoms/DropDown/DropDown";

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
        <FormField className={styles.title} title="Title">
          <TextInput
            value={title}
            disabled={!editing}
            dataKey="title"
            onChange={updateTaskProp}
          />
        </FormField>
        <FormField className={styles.description} title="Description">
          <Textarea
            value={description}
            disabled={!editing}
            dataKey="description"
            onChange={updateTaskProp}
          />
        </FormField>
      </aside>
      <aside>
        <FormField title="Status">
          <DropDown
            defaultValue={status}
            disabled={!editing}
            fieldKey="status"
            values={COLUMNS}
            dataKey="id"
            onChange={updateTaskProp}
          />
        </FormField>
        <FormField title="Assignee">
          <DropDown
            defaultValue={assignee}
            disabled={!editing}
            fieldKey="assignee"
            values={USERS}
            dataKey="id"
            onChange={updateTaskProp}
          />
        </FormField>
        <FormField title="Priority">
          <DropDown
            defaultValue={priority}
            disabled={!editing}
            fieldKey="priority"
            values={PRIORITIES}
            dataKey=""
            onChange={updateTaskProp}
          />
        </FormField>
        <FormField title="Created On" className={styles.createdOn}>
          <span disabled={!editing}>
            {(created_at ? new Date(created_at) : new Date()).toDateString()}
          </span>
        </FormField>
        <FormField title="Updated On" className={styles.updatedOn}>
          <span disabled={!editing}>
            {(updated_at ? new Date(updated_at) : new Date()).toDateString()}
          </span>
        </FormField>
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
