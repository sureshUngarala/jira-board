import React from "react";
import PropTypes from "prop-types";
import styles from "./AddButton.module.scss";

const AddButton = ({ onClick }) => {
  return (
    <button className={styles.add} onClick={onClick} aria-label="Add Task">
      + Create New
    </button>
  );
};

AddButton.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default AddButton;
