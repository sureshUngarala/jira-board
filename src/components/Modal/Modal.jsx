import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import EditButton from "../Buttons/Edit/EditButton";
import SubmitButton from "../Buttons/Submit/SubmitButton";
import CloseButton from "../Buttons/Close/CloseButton";
import styles from "./Modal.module.scss";

const Modal = ({ canEdit }) => {
  const [editing, isEditing] = useState(true);

  return (
    <div className={styles.modal}>
      <section className={styles.modalContent}>
        <section className={styles.header}>
          {canEdit && <EditButton onClick={() => isEditing(true)} />}
          <CloseButton onClick={() => {}} />
        </section>
        <section className={styles.footer}>
          {editing && <SubmitButton onClick={() => {}} />}
        </section>
      </section>
    </div>
  );
};

export default Modal;
