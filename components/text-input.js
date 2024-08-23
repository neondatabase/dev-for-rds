import PropTypes from 'prop-types';

const TextInput = ({ label, placeholder, onChange, value, defaultValue, icon, disabled = false }) => {
  return (
    <label
      className={`select-none flex flex-col gap-2 text-sm font-normal transition-colors duration-300 ${
        disabled ? 'text-brand-gray-500 cursor-not-allowed' : 'text-brand-gray-400'
      }`}
    >
      {label}
      <div
        className={`flex items-center justify-between border border-brand-border transition-colors duration-300 rounded ${
          disabled ? 'pointer-events-none' : ''
        }`}
      >
        <input
          type='text'
          placeholder={placeholder}
          onChange={onChange}
          value={value}
          defaultValue={defaultValue}
          disabled={disabled}
          className='bg-brand-background text-brand-gray-200 p-2 placeholder:text-brand-gray-400 font-normal transition-colors duration-300 grow disabled:text-brand-gray-500 select-none'
        />
        {icon ? <>{icon}</> : null}
      </div>
    </label>
  );
};

TextInput.propTypes = {
  /** The label text */
  label: PropTypes.string,
  /** The placeholder text */
  placeholder: PropTypes.string,
  /** The onChange handler */
  onChange: PropTypes.func,
  /** The input value */
  value: PropTypes.func,
  /** The input default value */
  defaultValue: PropTypes.string,
  /** The icon to render */
  icon: PropTypes.object,
  /** Determines if the input is disabled */
  disabled: PropTypes.bool,
};

export default TextInput;
