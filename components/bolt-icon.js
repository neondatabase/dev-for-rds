import PropTypes from 'prop-types';

const BoltIcon = ({ className = 'h-4 w-4' }) => {
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
        d='m3.75 13.5 10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75Z'
      />
    </svg>
  );
};

BoltIcon.propTypes = {
  /** CSS classes  */
  className: PropTypes.string,
};

export default BoltIcon;
