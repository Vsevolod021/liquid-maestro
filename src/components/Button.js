import PropTypes from 'prop-types';

const Button = ({ children, className, ...props }) => {
  return (
    <button className={`button ${className}`} {...props}>
      {children}
    </button>
  );
};

Button.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node
};

export default Button;
