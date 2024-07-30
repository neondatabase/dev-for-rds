import PropTypes from 'prop-types';
import DropdownList from './dropdown-list';

const DropdownInput = ({ label, value, options, onSelect }) => {
  return (
    <label className='flex flex-col gap-2 text-sm font-normal text-brand-gray-400'>
      {label}
      <DropdownList value={value} options={options} onSelect={onSelect} />
    </label>
  );
};

DropdownInput.propTypes = {
  /** The label text */
  label: PropTypes.string,
  /** The onSelect handler */
  onSelect: PropTypes.func,
  /** The selected value */
  value: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  /** The options to display */
  options: PropTypes.arrayOf(PropTypes.string),
};

export default DropdownInput;
