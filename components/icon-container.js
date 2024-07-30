import PropTypes from 'prop-types';

const IconContainer = ({ id, className, children }) => {
  return (
    <div
      id={id}
      className={`flex items-center justify-center w-7 h-7 rounded-full border border-brand-border/40 shrink-0 bg-brand-surface ${className}`}
    >
      {children}
    </div>
  );
};

IconContainer.propTypes = {
  /** The id of the svg */
  id: PropTypes.string,
  /** CSS classes  */
  className: PropTypes.string,
};

export default IconContainer;
