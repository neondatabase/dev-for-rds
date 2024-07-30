import PropTypes from 'prop-types';

const NeonIcon = ({ className = 'h-4 w-4' }) => {
  return (
    <svg
      id='neon-icon'
      xmlns='http://www.w3.org/2000/svg'
      className={className}
      fill='currentColor'
      viewBox='0 0 24 24'
    >
      <path
        d='m19.2.87s0,0,0,0c0,0,0,0,0,0H5.28c-2.02,0-3.66,1.72-3.66,3.85v14.62c0,2.13,1.64,3.85,3.66,3.85h6.34s0,0,0,0c0,0,0,0,0,0,1.82,0,3.3-1.55,3.3-3.46v-6.58l4.01,5.43c.48.65,1.16.92,1.81.89,1.09-.05,2.12-.94,2.12-2.31V4.72c0-2.13-1.64-3.85-3.66-3.85ZM5.28,20.11c-.4,0-.73-.34-.73-.77V4.72c0-.43.33-.77.73-.77h14.28c.4,0,.37.34.37.77v10.19l-4.01-5.43c-.48-.65-1.16-.92-1.81-.89-1.09.05-2.12.94-2.12,2.31v8.82c0,.21-.05.38-.26.38h-6.45Z'
        strokeWidth='0'
      />
    </svg>
  );
};

NeonIcon.propTypes = {
  /** CSS classes  */
  className: PropTypes.string,
};

export default NeonIcon;
