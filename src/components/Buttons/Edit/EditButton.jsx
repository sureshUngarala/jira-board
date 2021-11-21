import React from "react";
import PropTypes from "prop-types";
import EditIcon from "../../../assets/edit.png";
import styles from "./EditButton.module.scss";

const EditButton = ({ onClick }) => {
  return (
    <button onClick={onClick} className={styles.edit}>
      <img src={EditIcon} alt="Edit" />
    </button>
  );
};

EditButton.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default EditButton;
