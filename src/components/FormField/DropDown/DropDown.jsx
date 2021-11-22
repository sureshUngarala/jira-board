import PropTypes from "prop-types";

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
  defaultValue: PropTypes.string.isRequired,
  disabled: PropTypes.bool,
  fieldKey: PropTypes.string.isRequired,
  onChange: PropTypes.func,
  values: PropTypes.array,
  dataKey: PropTypes.string,
};
export default DropDown;
