import PropTypes from 'prop-types';

const ClockIcon = ({ className = 'h-4 w-4' }) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      className={className}
      fill='none'
      strokeWidth={1.5}
      stroke='currentColor'
      viewBox='0 0 24 22'
    >
      <path strokeLinecap='round' strokeLinejoin='round' d='M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z' />
    </svg>
  );
};

ClockIcon.propTypes = {
  /** CSS classes  */
  className: PropTypes.string,
};

export default ClockIcon;
