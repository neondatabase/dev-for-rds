import PropTypes from 'prop-types';

const ActionCheck = ({ id, className = 'w-4 h-4' }) => {
  return (
    <svg id={`${id}-check`} xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' className={className}>
      <path
        className='fill-brand-actions-green'
        d='m11.9,0C5.33,0,0,5.33,0,11.9s5.33,11.9,11.9,11.9,11.9-5.33,11.9-11.9S18.47,0,11.9,0Zm5.49,8.1l-5.83,8.16c-.18.25-.46.41-.77.44-.03,0-.06,0-.09,0-.28,0-.55-.11-.75-.31l-3.5-3.5c-.41-.41-.41-1.08,0-1.49.41-.41,1.08-.41,1.49,0l2.62,2.62,5.11-7.15c.34-.48,1-.59,1.47-.25.47.34.58,1,.25,1.47Z'
        strokeWidth='0'
      />
    </svg>
  );
};

ActionCheck.propTypes = {
  /** The id of the job (used for GSAP timeline references) */
  id: PropTypes.string,
  /** CSS classes  */
  className: PropTypes.string,
};

export default ActionCheck;
