import * as RadioGroup from '@radix-ui/react-radio-group';

import PropTypes from 'prop-types';

const RadioGroupInput = ({ label, value }) => {
  return (
    <label className='flex gap-2 text-sm font-medium text-brand-gray-200 cursor-pointer'>
      <RadioGroup.Item
        className='flex w-5 h-5 appearance-none items-center justify-center rounded-full border-2 border-brand-gray-400'
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
