import PropTypes from 'prop-types';

const LozengeChip = ({ text, className = 'self-center text-sm' }) => {
  return (
    <span
      className={`xl:self-start text-brand-primary uppercase font-semibold rounded-full py-1 px-4 bg-brand-primary/10 ${className}`}
    >
      {text}
    </span>
  );
};

LozengeChip.propTypes = {
  /** The text to display  */
  text: PropTypes.string,
  /** CSS classes  */
  className: PropTypes.string,
};

export default LozengeChip;
