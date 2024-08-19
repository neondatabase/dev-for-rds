import PropTypes from 'prop-types';

export const ToggleSwitchSmall = ({
  id,
  label,
  defaultChecked = false,
  className = '',
  onChange,
  disabled = false,
}) => {
  return (
    <div
      className={`flex gap-4 items-center font-medium text-xs transition-colors duration-300 ${
        disabled ? 'text-brand-gray-500 cursor-not-allowed' : 'text-brand-gray-400'
      } ${className}`}
    >
      {label}
      <label className='relative inline-flex cursor-pointer items-center'>
        <input
          id={id}
          type='checkbox'
          className='peer sr-only'
          defaultChecked={defaultChecked}
          onChange={onChange}
          disabled={disabled}
        />
        <label htmlFor={id} className='hidden' />

        <div
          className={`h-5 w-9 rounded-full border border-brand-border enabled-hover:border-brand-gray-400 transition-colors duration-300 bg-brand-surface after:absolute after:left-[2px] after:top-0.5 after:h-4 after:w-4 after:rounded-full after:border after:bg-white after:transition-all after:content-[''] after:border-white peer-checked:bg-brand-checked peer-checked:after:translate-x-full ring-brand-focus peer-focus:ring-1 peer-disabled:after:bg-brand-gray-500 peer-disabled:after:border-brand-gray-500 peer-disabled:bg-brand-surface ${
            disabled ? 'cursor-not-allowed' : 'cursor-pointer'
          }`}
        />
      </label>
    </div>
  );
};

ToggleSwitchSmall.propTypes = {
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
  /** Determines if the switch is disabled */
  disabled: PropTypes.bool,
};

export default ToggleSwitchSmall;
