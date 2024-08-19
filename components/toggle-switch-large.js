import PropTypes from 'prop-types';

export const ToggleSwitchLarge = ({ id, label, defaultChecked = false, className = '', onChange }) => {
  return (
    <div
      className={`flex gap-4 items-center font-medium text-xs transition-colors duration-300 text-brand-gray-400 ${className}`}
    >
      {label}
      <label className='relative inline-flex cursor-pointer items-center'>
        <input id={id} type='checkbox' className='peer sr-only' defaultChecked={defaultChecked} onChange={onChange} />
        <label htmlFor={id} className='hidden' />

        <div className="h-6 w-11 rounded-full border border-brand-border hover:border-brand-gray-400 transition-colors duration-300 bg-brand-surface after:absolute after:left-[2px] after:top-0.5 after:h-5 after:w-5 after:rounded-full after:border after:bg-white after:transition-all after:content-[''] after:border-white peer-checked:bg-brand-checked peer-checked:after:translate-x-full ring-brand-focus peer-focus:ring-1" />
      </label>
    </div>
  );
};

ToggleSwitchLarge.propTypes = {
  /** The id of the switch */
  id: PropTypes.string.isRequired,
  /** The label to display */
  label: PropTypes.string.isRequired,
  /** Is the checkout default checked or not */
  defaultChecked: PropTypes.bool,
  /** CSS classes  */
  className: PropTypes.string,
  /** onChange callback */
  onChange: PropTypes.func,
};

export default ToggleSwitchLarge;
