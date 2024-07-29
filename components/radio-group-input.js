import * as RadioGroup from '@radix-ui/react-radio-group';

import PropTypes from 'prop-types';

const RadioGroupInput = ({ label, value }) => {
  return (
    <label className='flex items-center gap-2 text-sm font-normal text-brand-gray-400 cursor-pointer hover:text-white transition-colors duration-200'>
      <RadioGroup.Item
        className='flex w-4 h-4 appearance-none items-center justify-center rounded-full border border-brand-gray-400'
        value={value}
      >
        <RadioGroup.Indicator>
          <div className='w-2 h-2 rounded-full bg-brand-checked' />
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
};

export default RadioGroupInput;
