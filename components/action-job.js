import PropTypes from 'prop-types';

import ActionSpinner from './action-spinner';
import ActionCheck from './action-check';

const ActionJob = ({ id, text, time, position = 'middle', className = 'w-full', children }) => {
  return (
    <div className='flex justify-center min-w-[220px]'>
      <div
        className={`relative flex items-center bg-brand-surface border border-brand-border rounded p-3 text-white text-xs min-h-10 ${className}`}
      >
        <div className='flex items-center gap-2 w-full'>
          {children ? (
            <div className='flex items-center w-6 h-6'>{children}</div>
          ) : (
            <div className='relative flex items-center w-4 h-4'>
              <ActionSpinner id={id} className='absolute w-4 h-4' />
              <ActionCheck id={id} className='absolute w-4 h-4 opacity-0 scale-0' />
            </div>
          )}
          <div className='flex justify-between w-full'>
            <span>{text}</span>
            <span className='text-brand-gray-500 font-medium'>{time}</span>
          </div>
        </div>

        {position === 'start' || position === 'middle' ? (
          <div className='absolute -right-[8px]'>
            <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' className='w-4 h-4'>
              <path
                d='m11.89,23.77v-2c5.45,0,9.88-4.43,9.88-9.88S17.34,2,11.89,2V0c6.55,0,11.88,5.33,11.88,11.88s-5.33,11.88-11.88,11.88Z'
                className='fill-brand-border'
                strokeWidth='0'
              />
              <circle cx='11.89' cy='11.88' r='10' className='fill-brand-surface' strokeWidth='0' />
              <circle cx='11.89' cy='11.88' r='4' className='fill-brand-gray-400/80' strokeWidth='0' />
            </svg>
          </div>
        ) : null}

        {position === 'end' || position === 'middle' ? (
          <div className='absolute -left-[8px]'>
            <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' className='w-4 h-4'>
              <path
                d='m11.88,23.77v-2c-5.45,0-9.88-4.43-9.88-9.88S6.43,2,11.88,2V0C5.33,0,0,5.33,0,11.88c0,6.55,5.33,11.88,11.88,11.88Z'
                className='fill-brand-border'
                strokeWidth='0'
              />
              <circle cx='11.89' cy='11.88' r='10' className='fill-brand-surface' strokeWidth='0' />
              <circle cx='11.89' cy='11.88' r='4' className='fill-brand-gray-400/80' strokeWidth='0' />
            </svg>
          </div>
        ) : null}
      </div>
    </div>
  );
};

ActionJob.propTypes = {
  /** CSS classes  */
  className: PropTypes.string,
  /** The id of the job (used for GSAP timeline references) */
  id: PropTypes.string,
  /** The text to display  */
  text: PropTypes.string,
  /** The time to display  */
  time: PropTypes.string,
  /** Determines which dimple(s) to show */
  position: PropTypes.oneOf(['start', 'middle', 'end']),
};

export default ActionJob;
