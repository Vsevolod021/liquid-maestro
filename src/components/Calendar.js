import PropTypes from 'prop-types';

const Calendar = ({ label = 'Date & Time' }) => {
  return (
    <div className="calendar">
      <span className="calendar__label">{label}</span>
      <div className="calendar__main"></div>
    </div>
  );
};

Calendar.propTypes = {
  label: PropTypes.string
};

export default Calendar;
