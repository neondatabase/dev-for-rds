import PropTypes from 'prop-types';

const InfoIcon = ({ className = 'h-4 w-4' }) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      className={className}
      fill='none'
      strokeWidth={1.5}
      stroke='currentColor'
      viewBox='0 0 24 24'
    >
      <path
        strokeLinecap='round'
        strokeLinejoin='round'
        d='m11.25 11.25.041-.02a.75.75 0 0 1 1.063.852l-.708 2.836a.75.75 0 0 0 1.063.853l.041-.021M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9-3.75h.008v.008H12V8.25Z'
        // className='stroke-brand-gray-400'
      />
    </svg>
  );
};

InfoIcon.propTypes = {
  /** CSS classes  */
  className: PropTypes.string,
};

export default InfoIcon;
