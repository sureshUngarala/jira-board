import React from "react";
import PropTypes from "prop-types";
import CloseIcon from "../../../assets/close.png";
import styles from "./Close.module.scss";

const Close = ({ onClick }) => {
  return (
    <button onClick={onClick} className={styles.close}>
      <img src={CloseIcon} alt="Close" />
    </button>
  );
};

Close.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default Close;
