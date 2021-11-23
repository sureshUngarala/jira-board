import { useEffect, createRef } from "react";
import PropTypes from "prop-types";
import styles from "./Button.module.scss";

const Button = ({ className, onClick, label, children, focusOnLoad }) => {
  const ref = createRef();
  useEffect(() => {
    focusOnLoad && ref.current.focus();
  }, []);

  return (
    <button
      className={styles[className]}
      onClick={onClick}
      aria-label={label}
      ref={ref}
    >
      {children}
    </button>
  );
};

Button.propTypes = {
  className: PropTypes.string,
  onClick: PropTypes.func.isRequired,
  focusOnLoad: PropTypes.bool,
};

export default Button;
