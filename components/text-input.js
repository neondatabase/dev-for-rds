import PropTypes from 'prop-types';

const TextInput = ({ label, placeholder, onChange, value, defaultValue }) => {
  return (
    <label className='flex flex-col gap-2 text-sm font-normal text-brand-gray-400 hover:text-white transition-colors duration-200'>
      {label}
      <input
        type='text'
        placeholder={placeholder}
        onChange={onChange}
        value={value}
        defaultValue={defaultValue}
        className='bg-transparent border border-brand-border p-2 rounded text-brand-gray-200 placeholder:text-brand-gray-400 font-normal'
      />
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
};

export default TextInput;
