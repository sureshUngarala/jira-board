import PropTypes from "prop-types";
import styles from "./TextInput.module.scss";

const TextInput = ({ value, disabled, dataKey, onChange }) => (
  <input
    type="text"
    value={value}
    disabled={disabled}
    className={styles.textInput}
    onChange={({ target: { value } }) => onChange(dataKey, value)}
    aria-disabled={disabled}
  />
);
TextInput.propTypes = {
  value: PropTypes.string,
  disabled: PropTypes.bool,
  dataKey: PropTypes.string,
  onChange: PropTypes.func,
};

export default TextInput;
