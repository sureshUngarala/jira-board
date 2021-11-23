import PropTypes from "prop-types";
import styles from "./DropDown.module.scss";

const DropDown = ({
  defaultValue,
  disabled,
  fieldKey,
  values,
  dataKey,
  onChange,
}) => (
  <select
    defaultValue={defaultValue}
    disabled={disabled}
    className={styles.dropDown}
    onChange={({ target: { value } }) => onChange(fieldKey, value)}
  >
    {values.map((value) => (
      <option
        key={dataKey ? value[dataKey] : value}
        value={dataKey ? value[dataKey] : value}
      >
        {dataKey ? value.name : value}
      </option>
    ))}
  </select>
);

DropDown.propTypes = {
  defaultValue: PropTypes.string,
  disabled: PropTypes.bool,
  fieldKey: PropTypes.string.isRequired,
  onChange: PropTypes.func,
  values: PropTypes.array,
  dataKey: PropTypes.string,
};
export default DropDown;
