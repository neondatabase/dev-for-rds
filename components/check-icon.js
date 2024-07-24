import PropTypes from 'prop-types';

const CheckIcon = ({ className = 'h-4 w-4' }) => {
  return (
    <svg xmlns='http://www.w3.org/2000/svg' className={className} fill='none' viewBox='0 0 24 18'>
      <path
        d='m8.11,16.94c-.25,0-.48-.11-.64-.3L.2,8.17c-.31-.35-.26-.89.09-1.19.35-.3.89-.26,1.19.09l6.62,7.72L20.54.3c.3-.36.84-.4,1.19-.09.36.3.4.84.09,1.19l-13.07,15.25c-.16.19-.4.3-.64.3Z'
        fill='currentColor'
      />
    </svg>
  );
};

CheckIcon.propTypes = {
  /** CSS classes  */
  className: PropTypes.string,
};

export default CheckIcon;
