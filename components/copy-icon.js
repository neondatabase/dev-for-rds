import PropTypes from 'prop-types';

const CopyIcon = ({ className = 'h-4 w-4' }) => {
  return (
    <svg xmlns='http://www.w3.org/2000/svg' className={className} fill='none' viewBox='0 0 24 22'>
      <path
        d='m19.89,22.19h-10.7c-1.27,0-2.29-1.03-2.29-2.29v-10.71c0-1.27,1.03-2.29,2.29-2.29h10.7c1.27,0,2.29,1.03,2.29,2.29v10.71c0,1.27-1.03,2.29-2.29,2.29Zm-10.7-13.77c-.42,0-.76.34-.76.76v10.71c0,.42.34.76.76.76h10.7c.42,0,.76-.34.76-.76v-10.71c0-.42-.34-.76-.76-.76h-10.7Z'
        fill='currentColor'
      />
      <path
        d='m2.29,0C1.03,0,0,1.03,0,2.29v10.71c0,1.27,1.03,2.29,2.29,2.29h2.29c.42,0,.76-.34.76-.76s-.34-.76-.76-.76h-2.29c-.42,0-.76-.34-.76-.76V2.29c0-.42.34-.76.76-.76h10.7c.42,0,.76.34.76.76v2.29c0,.42.34.76.76.76s.76-.34.76-.76v-2.29c0-1.27-1.03-2.29-2.29-2.29H2.29Z'
        fill='currentColor'
      />
    </svg>
  );
};

CopyIcon.propTypes = {
  /** CSS classes  */
  className: PropTypes.string,
};

export default CopyIcon;
