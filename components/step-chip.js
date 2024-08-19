import PropTypes from 'prop-types';

const StepChip = ({ step }) => {
  return (
    <div className='relative text-brand-gray-200 w-10 mt-1'>
      <span className='absolute flex items-center font-medium justify-center text-xs w-8 h-8 rounded-full border-2 border-brand-border bg-brand-background sm:w-10 sm:h-10 sm:text-base '>
        {step}
      </span>
    </div>
  );
};

StepChip.propTypes = {
  /** The step number */
  step: PropTypes.number,
};

export default StepChip;
