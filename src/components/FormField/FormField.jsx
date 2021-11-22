import PropTypes from "prop-types";

const FormField = ({ className, title, children }) => {
  return (
    <label className={className}>
      <span>{title}</span>
      {children}
    </label>
  );
};

FormField.propTypes = {
  className: PropTypes.string,
  title: PropTypes.string.isRequired,
};

export default FormField;
