import PropTypes from 'prop-types';

const Input = ({ onChange, label, name, placeholder = '', value = '' }) => {
  return (
    <label className="input">
      <span className="input__label">{label}</span>
      <input
        className="input__input"
        placeholder={placeholder}
        onChange={onChange}
        data-name={name}
        value={value}
      />
    </label>
  );
};

Input.propTypes = {
  placeholder: PropTypes.string,
  onChange: PropTypes.func,
  value: PropTypes.string,
  label: PropTypes.string,
  name: PropTypes.string
};

export default Input;
