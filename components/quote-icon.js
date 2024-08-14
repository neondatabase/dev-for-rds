import PropTypes from 'prop-types';

const QuoteIcon = ({ className = 'h-4 w-4' }) => {
  return (
    <svg xmlns='http://www.w3.org/2000/svg' className={className} fill='currentColor' viewBox='0 0 24 16'>
      <path
        d='m22.39,10.74c-.03.1-.08.19-.1.29-.56,2.6-2.9,4.31-5.55,4.05-2.56-.25-4.53-2.47-4.57-5.08-.06-3.45,1.16-6.28,3.97-8.35,1.25-.92,2.68-1.43,4.22-1.61.11-.01.23,0,.45,0-1.58,1.34-2.63,2.91-3.18,4.86.3.06.56.09.81.16,2.01.53,3.27,1.81,3.82,3.8.05.17.09.34.13.5,0,.46,0,.92,0,1.38Z'
        className='fill-brand-secondary'
      />
      <path
        d='m8.69,0c-1.62,1.37-2.66,2.94-3.22,4.88.17.04.31.09.46.11,2.66.43,4.55,2.87,4.28,5.52-.29,2.76-2.65,4.73-5.48,4.58C2.14,14.95.05,12.68,0,10.04-.06,6.53,1.18,3.65,4.08,1.58c1.32-.95,2.82-1.44,4.61-1.58Z'
        className='fill-brand-secondary'
      />
    </svg>
  );
};

QuoteIcon.propTypes = {
  /** CSS classes  */
  className: PropTypes.string,
};

export default QuoteIcon;
