import PropTypes from 'prop-types';

const TextInput = ({ label, placeholder, onChange, value, defaultValue, icon }) => {
  return (
    <label className='flex flex-col gap-2 text-sm font-normal text-brand-gray-400'>
      {label}
      <div className='flex items-center justify-between border border-brand-border rounded'>
        <input
          type='text'
          placeholder={placeholder}
          onChange={onChange}
          value={value}
          defaultValue={defaultValue}
          className='bg-transparent text-brand-gray-200 p-2 placeholder:text-brand-gray-400 font-normal grow'
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
};

export default TextInput;
