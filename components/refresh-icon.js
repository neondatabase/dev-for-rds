import PropTypes from 'prop-types';

const RefreshIcon = ({ className = 'h-4 w-4' }) => {
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
        d='M19.5 12c0-1.232-.046-2.453-.138-3.662a4.006 4.006 0 0 0-3.7-3.7 48.678 48.678 0 0 0-7.324 0 4.006 4.006 0 0 0-3.7 3.7c-.017.22-.032.441-.046.662M19.5 12l3-3m-3 3-3-3m-12 3c0 1.232.046 2.453.138 3.662a4.006 4.006 0 0 0 3.7 3.7 48.656 48.656 0 0 0 7.324 0 4.006 4.006 0 0 0 3.7-3.7c.017-.22.032-.441.046-.662M4.5 12l3 3m-3-3-3 3'
      />
    </svg>
  );
};

RefreshIcon.propTypes = {
  /** CSS classes  */
  className: PropTypes.string,
};

export default RefreshIcon;
