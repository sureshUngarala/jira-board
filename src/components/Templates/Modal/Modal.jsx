import { useState } from "react";
import PropTypes from "prop-types";
import Button from "../../Atoms/Button/Button";
import EditIcon from "../../../assets/edit.png";
import CloseIcon from "../../../assets/close.png";
import Form from "../../Organisms/Form/Form";
import styles from "./Modal.module.scss";

const Modal = ({ canEdit, task, newTask, onClose, onSubmit }) => {
  const [editing, isEditing] = useState(newTask);
  const [formData, setFormData] = useState(task);

  const updateTaskProp = (key, value) => {
    setFormData({ ...formData, ...{ [key]: value } });
  };

  return (
    <div className={styles.modal}>
      <section className={styles.modalContent} aria-modal={true}>
        <section className={styles.header}>
          {!newTask && canEdit && (
            <Button
              onClick={() => isEditing(true)}
              className="edit"
              label="Edit Task"
            >
              <img src={EditIcon} alt="Edit" />
            </Button>
          )}
          <Button
            onClick={onClose}
            className="close"
            label="Close Modal"
            focusOnLoad
          >
            <img src={CloseIcon} alt="Close" />
          </Button>
        </section>
        <section className={styles.body}>
          <Form
            editing={editing}
            task={formData}
            updateTaskProp={updateTaskProp}
          />
        </section>
        <section className={styles.footer}>
          {editing && (
            <Button
              className="save"
              onClick={() => onSubmit(formData)}
              label="Save Task"
            >
              Save
            </Button>
          )}
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
