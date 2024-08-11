import PropTypes from 'prop-types';

const Section = ({ children, className = '' }) => {
  return <section className={`section ${className}`}>{children}</section>;
};

Section.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node
};

export default Section;
