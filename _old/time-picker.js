import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import DropdownList from './dropdown-list';

const TimePicker = ({ options }) => {
  const [state, setState] = useState({
    timezone: options[1],
  });

  useEffect(() => {
    const now = new Date();

    const dateFormatter = new Intl.DateTimeFormat('en-US', {
      timeZone: state.timezone,
      hour: 'numeric',
      minute: 'numeric',
      second: 'numeric',
      hour12: false,
    });
    const formattedDate = dateFormatter.format(now);
    console.log('Formatted Date:', formattedDate);

    // Convert to epoch
    const dateInSpecifiedTimezone = new Date(now.toLocaleString('en-US', { timeZone: state.timezone }));
    const myEpoch = Math.floor(dateInSpecifiedTimezone.getTime() / 1000);
    console.log('Epoch Time:', myEpoch);
    // onSelect(myEpoch);
  }, [state]);

  const handleTimezoneChange = (event) => {
    const {
      target: { innerText },
    } = event;

    setState((prevState) => ({
      ...prevState,
      timezone: innerText,
    }));
  };

  //   console.log(JSON.stringify(state, null, 2));

  return (
    <label className='flex flex-col gap-2 text-sm font-medium text-brand-gray-200'>
      Schedule
      <div className='flex'>
        {/* <input
          type='time'
          class='flex-shrink-0 rounded-none rounded-s-lg bg-gray-50 border text-gray-900 leading-none focus:ring-blue-500 focus:border-blue-500 block text-sm border-gray-300 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
          min='09:00'
          max='18:00'
          value='00:00'
          required
        /> */}
        <DropdownList value={state.timezone} options={options} onSelect={handleTimezoneChange} />
        {/* <select
          id='timezones'
          name='timezone'
          class='bg-gray-50 border border-s-0 border-gray-300 text-gray-900 text-sm rounded-e-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
          required
        >
          <option value='America/New_York' selected>
            EST - GMT-5 (New York)
          </option>
          <option value='America/Los_Angeles'>PST - GMT-8 (Los Angeles)</option>
          <option value='Europe/London'>GMT - GMT+0 (London)</option>
          <option value='Europe/Paris'>CET - GMT+1 (Paris)</option>
          <option value='Asia/Tokyo'>JST - GMT+9 (Tokyo)</option>
          <option value='Australia/Sydney'>AEDT - GMT+11 (Sydney)</option>
          <option value='Canada/Mountain'>MST - GMT-7 (Canada)</option>
          <option value='Canada/Central'>CST - GMT-6 (Canada)</option>
          <option value='Canada/Eastern'>EST - GMT-5 (Canada)</option>
          <option value='Europe/Berlin'>CET - GMT+1 (Berlin)</option>
          <option value='Asia/Dubai'>GST - GMT+4 (Dubai)</option>
          <option value='Asia/Singapore'>SGT - GMT+8 (Singapore)</option>
        </select> */}
      </div>
    </label>
  );
};

TimePicker.propTypes = {
  // /** The onSelect handler */
  // onSelect: PropTypes.func,
  // /** The selected value */
  // value: PropTypes.number,
  /** The options to display */
  options: PropTypes.arrayOf(PropTypes.string),
};

export default TimePicker;
