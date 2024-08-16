import * as RadioGroup from '@radix-ui/react-radio-group';

import PropTypes from 'prop-types';

const RadioGroupInput = ({ label, value, disabled }) => {
  return (
    <label
      className={`flex items-center gap-2 text-sm font-normal cursor-pointer transition-colors duration-300 ${
        disabled ? 'text-brand-gray-500 !cursor-not-allowed' : 'hover:text-white text-brand-gray-400'
      }`}
    >
      <RadioGroup.Item
        className={`flex w-4 h-4 appearance-none items-center justify-center rounded-full transition-colors duration-300 border ${
          disabled ? 'border-brand-gray-500' : 'border-brand-gray-400'
        } `}
        value={value}
      >
        <RadioGroup.Indicator>
          <div
            className={`w-2 h-2 rounded-full transition-colors duration-300 ${
              disabled ? 'bg-brand-gray-500' : 'bg-brand-checked'
            } `}
          />
        </RadioGroup.Indicator>
      </RadioGroup.Item>
      {label}
    </label>
  );
};

RadioGroupInput.propTypes = {
  /** The label text */
  label: PropTypes.string,
  /** The value of the item */
  value: PropTypes.string,
  /** Determines if the input is disabled */
  disabled: PropTypes.bool,
};

export default RadioGroupInput;
