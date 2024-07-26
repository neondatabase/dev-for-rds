import PropTypes from 'prop-types';

const ActionClock = ({ id, className = 'w-4 h-4' }) => {
  return (
    <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' className={className}>
      <path
        className='fill-brand-gray-500'
        d='m12,24C5.38,24,0,18.62,0,12S5.38,0,12,0s12,5.38,12,12-5.38,12-12,12Zm0-21.33C6.86,2.67,2.67,6.85,2.67,12s4.19,9.33,9.33,9.33,9.33-4.19,9.33-9.33S17.15,2.67,12,2.67Z'
        opacity='.4'
        strokeWidth='0'
      />
      <path
        className='fill-brand-gray-400'
        d='m11.97,11.06c-.8,0-1.45-.65-1.45-1.45l.07-8.11c0-.8.65-1.45,1.45-1.45s1.45.65,1.45,1.45l-.07,8.11c0,.8-.65,1.45-1.45,1.45Z'
        strokeWidth='0'
      />
      <circle className='fill-brand-gray-500' cx='12' cy='12' r='2.86' strokeWidth='0' />
      <path
        id={`${id}-clock`}
        className='fill-brand-gray-200'
        d='m11.97,11.06c-.8,0-1.45-.65-1.45-1.45l.07-8.11c0-.8.65-1.45,1.45-1.45s1.45.65,1.45,1.45l-.07,8.11c0,.8-.65,1.45-1.45,1.45Z'
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
