import PropTypes from 'prop-types';
import * as DropdownMenu from '@radix-ui/react-dropdown-menu';

const DropdownList = ({ value, options, onSelect }) => {
  return (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger asChild>
        <button className='flex justify-between items-center bg-transparent border border-brand-border p-2 rounded text-brand-gray-400 font-normal w-full text-sm text-left'>
          {value}
          <svg
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            viewBox='0 0 24 24'
            stroke='currentColor'
            className='w-5 h-5 stroke-2'
          >
            <path strokeLinecap='round' strokeLinejoin='round' d='m19.5 8.25-7.5 7.5-7.5-7.5' />
          </svg>
        </button>
      </DropdownMenu.Trigger>

      <DropdownMenu.Portal>
        <DropdownMenu.Content
          className='min-w-[220px] rounded border border-brand-border bg-brand-background shadow'
          sideOffset={8}
          align='start'
        >
          {options.map((option, index) => {
            return (
              <DropdownMenu.Item
                key={index}
                className='text-brand-gray-200 text-sm p-2 cursor-pointer w-full hover:text-white transition-colors duration-200'
                onSelect={onSelect}
              >
                {option}
              </DropdownMenu.Item>
            );
          })}
        </DropdownMenu.Content>
      </DropdownMenu.Portal>
    </DropdownMenu.Root>
  );
};

DropdownList.propTypes = {
  /** The onSelect handler */
  onSelect: PropTypes.func,
  /** The selected value */
  value: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  /** The options to display */
  options: PropTypes.arrayOf(PropTypes.string),
};

export default DropdownList;
