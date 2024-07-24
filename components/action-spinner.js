import PropTypes from 'prop-types';

const ActionSpinner = ({ id, className = 'w-4 h-4' }) => {
  return (
    <svg id={`${id}-spinner`} xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' className={className}>
      <circle cx={12} cy={12} r={4.78} className='fill-brand-actions-yellow' />
      <path
        className='fill-brand-actions-yellow opacity-40'
        d='M12 24C5.38 24 0 18.62 0 12S5.38 0 12 0s12 5.38 12 12-5.38 12-12 12Zm0-21.33c-5.14 0-9.33 4.18-9.33 9.33s4.19 9.33 9.33 9.33 9.33-4.19 9.33-9.33S17.15 2.67 12 2.67Z'
      />
      <path
        d='M2.67 12H0C0 5.38 5.38 0 12 0v2.67c-5.14 0-9.33 4.18-9.33 9.33Z'
        className='fill-brand-actions-yellow animate-spin'
        style={{ transformOrigin: '50% 50%' }}
      />
    </svg>
  );
};

ActionSpinner.propTypes = {
  /** The id of the job (used for GSAP timeline references) */
  id: PropTypes.string,
  /** CSS classes  */
  className: PropTypes.string,
};

export default ActionSpinner;
