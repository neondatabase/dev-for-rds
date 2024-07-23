import * as Checkbox from '@radix-ui/react-checkbox';

import PropTypes from 'prop-types';

const CheckInput = ({ label, onCheckedChange, checked = false }) => {
  return (
    <label className='flex gap-2 capitalize text-sm font-medium text-brand-gray-200 cursor-pointer'>
      <Checkbox.Root
        onCheckedChange={onCheckedChange}
        checked={checked}
        className='flex w-5 h-5 appearance-none items-center justify-center rounded-full border-2 border-brand-gray-400'
      >
        <Checkbox.Indicator>
          <div className='w-2 h-2 rounded-full bg-brand-checked' />
        </Checkbox.Indicator>
      </Checkbox.Root>
      {label}
    </label>
  );
};

CheckInput.propTypes = {
  /** The label text */
  label: PropTypes.string,
  /** The onCheckedChange handler */
  onCheckedChange: PropTypes.func,
  /** The checked default value */
  checked: PropTypes.bool,
};

export default CheckInput;
