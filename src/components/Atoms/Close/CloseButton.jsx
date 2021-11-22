import React, { useEffect, createRef } from "react";
import PropTypes from "prop-types";
import CloseIcon from "../../../assets/close.png";
import styles from "./Close.module.scss";

const Close = ({ onClick }) => {
  const ref = createRef();
  useEffect(() => {
    ref.current.focus();
  }, []);

  return (
    <button
      onClick={onClick}
      className={styles.close}
      ref={ref}
      aria-label="Close Modal"
    >
      <img src={CloseIcon} alt="Close" />
    </button>
  );
};

Close.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default Close;
