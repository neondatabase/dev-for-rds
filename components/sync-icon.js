import PropTypes from 'prop-types';

const SyncIcon = ({ className = 'h-4 w-4' }) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      className={className}
      fill='none'
      strokeWidth={1.5}
      stroke='currentColor'
      viewBox='0 0 24 22'
    >
      <path
        strokeLinecap='round'
        strokeLinejoin='round'
        d='M7.5 21 3 16.5m0 0L7.5 12M3 16.5h13.5m0-13.5L21 7.5m0 0L16.5 12M21 7.5H7.5'
      />
    </svg>
  );
};

SyncIcon.propTypes = {
  /** CSS classes  */
  className: PropTypes.string,
};

export default SyncIcon;
