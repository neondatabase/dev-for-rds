import PropTypes from 'prop-types';

const ArrowIcon = ({ className = 'w-4 h-4 mt-0.5' }) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      className={className}
      fill='none'
      strokeWidth={1.5}
      stroke='currentColor'
      strokeLinecap='round'
      strokeLinejoin='round'
      viewBox='0 0 16 8'
    >
      <path d='M1 4h14m0 0-3-3m3 3-3 3' />
    </svg>
  );
};

ArrowIcon.propTypes = {
  /** CSS classes  */
  className: PropTypes.string,
};

export default ArrowIcon;
