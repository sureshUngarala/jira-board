import { useState } from "react";
import PropTypes from "prop-types";
import EditButton from "../Buttons/Edit/EditButton";
import SubmitButton from "../Buttons/Submit/SubmitButton";
import CloseButton from "../Buttons/Close/CloseButton";
import Form from "../Form/Form";
import styles from "./Modal.module.scss";

const Modal = ({ canEdit, task, newTask, onClose, onSubmit }) => {
  const [editing, isEditing] = useState(newTask);
  const [formData, setFormData] = useState(task);

  const updateTaskProp = (key, value) => {
    setFormData({ ...formData, ...{ [key]: value } });
  };

  return (
    <div className={styles.modal}>
      <section className={styles.modalContent}>
        <section className={styles.header}>
          {!newTask && canEdit && (
            <EditButton onClick={() => isEditing(true)} />
          )}
          <CloseButton onClick={onClose} />
        </section>
        <section className={styles.body}>
          <Form
            editing={editing}
            task={formData}
            updateTaskProp={updateTaskProp}
          />
        </section>
        <section className={styles.footer}>
          {editing && <SubmitButton onClick={() => onSubmit(formData)} />}
        </section>
      </section>
    </div>
  );
};

Modal.propTypes = {
  canEdit: PropTypes.bool.isRequired,
  task: PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    assignee: PropTypes.string.isRequired,
    priority: PropTypes.string.isRequired,
    created_at: PropTypes.number.isRequired,
    updated_at: PropTypes.number.isRequired,
  }).isRequired,
  onClose: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
  newTask: PropTypes.bool,
};

export default Modal;
