import PropTypes from "prop-types";
import styles from "./Textarea.module.scss";

const Textarea = ({ value, disabled, dataKey, onChange }) => (
  <textarea
    type="text"
    value={value}
    disabled={disabled}
    className={styles.textarea}
    onChange={({ target: { value } }) => onChange(dataKey, value)}
  />
);
Textarea.propTypes = {
  value: PropTypes.string,
  disabled: PropTypes.bool,
  dataKey: PropTypes.string,
  onChange: PropTypes.func,
};

export default Textarea;
