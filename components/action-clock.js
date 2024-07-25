import PropTypes from 'prop-types';

const ActionClock = ({ id, className = 'w-10 h-10' }) => {
  return (
    <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' className={className}>
      <circle cx={12} cy={12} r={12} className='fill-brand-surface' />
      <circle cx={12} cy={12} r={10} className='fill-brand-gray-500 opacity-50' />
      <path
        className='fill-brand-gray-500 opacity-80'
        d='M12 24C5.38 24 0 18.62 0 12S5.38 0 12 0s12 5.38 12 12-5.38 12-12 12Zm0-21.33c-5.14 0-9.33 4.18-9.33 9.33s4.19 9.33 9.33 9.33 9.33-4.19 9.33-9.33S17.15 2.67 12 2.67Z'
      />
      <path
        d='m12,12.89c-.55,0-1-.45-1-1V1c0-.55.45-1,1-1s1,.45,1,1v10.89c0,.55-.45,1-1,1Z'
        className='fill-brand-gray-400'
        strokeWidth='0'
      />
      <path
        id={`${id}-clock`}
        d='m12,12.89c-.55,0-1-.45-1-1V1c0-.55.45-1,1-1s1,.45,1,1v10.89c0,.55-.45,1-1,1Z'
        className='fill-brand-gray-400'
        strokeWidth='0'
      />
    </svg>
  );
};

ActionClock.propTypes = {
  /** The id of the job (used for GSAP timeline references) */
  id: PropTypes.string,
  /** CSS classes  */
  className: PropTypes.string,
};

export default ActionClock;
