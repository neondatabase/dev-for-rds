import PropTypes from 'prop-types';

const GitHubClock = ({ id, className = 'w-10 h-10' }) => {
  return (
    <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' className={className}>
      <circle cx={10} cy={14} r={8} className='fill-brand-surface' />
      <path
        className='fill-brand-gray-500'
        d='m17.34,7.26h0s1.08-1.09,1.08-1.09c.29-.27.41-.68.31-1.06-.05-.2-.16-.38-.31-.53-.44-.41-1.12-.38-1.53.06l-1.08,1.08h-.01c-1.43-1.14-3.17-1.86-4.99-2.06v-.06s0-1.44,0-1.44h1.08c.6,0,1.08-.48,1.08-1.08s-.48-1.08-1.08-1.08h-4.33c-.6,0-1.08.48-1.08,1.08s.48,1.08,1.08,1.08h1.08v1.5c-1.83.2-3.56.92-4.99,2.07h-.01s-1.08-1.09-1.08-1.09c-.43-.4-1.09-.39-1.5.03-.41.41-.42,1.08-.03,1.5l1.08,1.08h0c-2.84,3.56-2.84,8.61,0,12.16,3.35,4.2,9.48,4.88,13.68,1.53,4.2-3.35,4.88-9.48,1.53-13.68Zm-7.6,13.64c-4.18,0-7.57-3.39-7.57-7.57,0-4.18,3.39-7.57,7.57-7.57,4.18,0,7.57,3.39,7.57,7.57s-3.39,7.57-7.57,7.57Z'
        strokeWidth='0'
      />
      <path
        id={`${id}-clock`}
        className='fill-brand-gray-500'
        d='m9.73,13.41c-.64,0-1.16-.52-1.16-1.16v-4.67c0-.64.52-1.16,1.16-1.16s1.16.52,1.16,1.16v4.67c0,.64-.52,1.16-1.16,1.16Z'
        strokeWidth='0'
        transformBox='fill-box'
      />
      <circle cx={10} cy={14} r={2} className='fill-brand-gray-500' strokeWidth='0' />
    </svg>
  );
};

GitHubClock.propTypes = {
  /** The id of the job (used for GSAP timeline references) */
  id: PropTypes.string,
  /** CSS classes  */
  className: PropTypes.string,
};

export default GitHubClock;
