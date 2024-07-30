import PropTypes from 'prop-types';

const DotIcon = ({ id, className = 'w-4 h-4' }) => {
  return (
    <svg id={id} xmlns='http://www.w3.org/2000/svg' className={className} fill='currentColor' viewBox='0 0 24 24'>
      <circle cx={12} cy={12} r={4} />
      {/* <path
        fillRule='evenodd'
        d='M16.28 11.47a.75.75 0 0 1 0 1.06l-7.5 7.5a.75.75 0 0 1-1.06-1.06L14.69 12 7.72 5.03a.75.75 0 0 1 1.06-1.06l7.5 7.5Z'
        clipRule='evenodd'
      /> */}
      {/* <path d='M16.5 7.5h-9v9h9v-9Z' />
      <path
        fillRule='evenodd'
        d='M8.25 2.25A.75.75 0 0 1 9 3v.75h2.25V3a.75.75 0 0 1 1.5 0v.75H15V3a.75.75 0 0 1 1.5 0v.75h.75a3 3 0 0 1 3 3v.75H21A.75.75 0 0 1 21 9h-.75v2.25H21a.75.75 0 0 1 0 1.5h-.75V15H21a.75.75 0 0 1 0 1.5h-.75v.75a3 3 0 0 1-3 3h-.75V21a.75.75 0 0 1-1.5 0v-.75h-2.25V21a.75.75 0 0 1-1.5 0v-.75H9V21a.75.75 0 0 1-1.5 0v-.75h-.75a3 3 0 0 1-3-3v-.75H3A.75.75 0 0 1 3 15h.75v-2.25H3a.75.75 0 0 1 0-1.5h.75V9H3a.75.75 0 0 1 0-1.5h.75v-.75a3 3 0 0 1 3-3h.75V3a.75.75 0 0 1 .75-.75ZM6 6.75A.75.75 0 0 1 6.75 6h10.5a.75.75 0 0 1 .75.75v10.5a.75.75 0 0 1-.75.75H6.75a.75.75 0 0 1-.75-.75V6.75Z'
        clipRule='evenodd'
      /> */}
    </svg>
  );
};

DotIcon.propTypes = {
  /** The id of the svg */
  id: PropTypes.string,
  /** CSS classes  */
  className: PropTypes.string,
};

export default DotIcon;
