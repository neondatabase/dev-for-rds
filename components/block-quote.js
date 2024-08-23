import PropTypes from 'prop-types';
import Image from 'next/image';

import ArrowIcon from './arrow-icon';

import { getImageUrl } from '../utils/get-image-url';

const Blockquote = ({ quote, profile, source, cite, cta, href }) => {
  return (
    <figure className='m-0 flex flex-col gap-4 relative rounded border border-brand-border bg-brand-surface p-6 sm:px-14 sm:pt-12 sm:pb-8'>
      <Image
        src={getImageUrl('blockquote.svg')}
        width={65}
        height={65}
        quality={100}
        alt='blockquote icon'
        className='m-0 hidden sm:block absolute top-4 left-6'
      />
      <blockquote className='m-0 p-0 border-none text-white'>{quote}</blockquote>
      <div className='flex flex-col sm:flex-row gap-2 sm:justify-between'>
        <div className='flex items-center gap-2'>
          <Image
            src={getImageUrl(profile)}
            width={40}
            height={40}
            alt={`${source} - ${cite}`}
            className='m-0 rounded-full overflow-hidden w-6 h-6 sm:w-10 sm:h-10'
          />
          <figcaption className='m-0 text-sm sm:text-lg text-brand-gray-200'>
            {source} <cite className='font-light not-italic text-brand-gray-400'>- {cite}</cite>
          </figcaption>
        </div>
        <a
          className='group inline-flex gap-2 items-center no-underline font-normal text-sm hover:text-brand-primary duration-300 transition-colors'
          href={href}
          target='_blank'
          rel='noopener'
        >
          {cta}
          <ArrowIcon className='w-4 h-4 mt-0.5 group-hover:translate-x-[3px] duration-300 transition-transform' />
        </a>
      </div>
    </figure>
  );
};

Blockquote.propTypes = {
  /** The quote to display  */
  quote: PropTypes.string.isRequired,
  /** The authors profile photo */
  profile: PropTypes.string.isRequired,
  /** The source of the quote */
  source: PropTypes.string.isRequired,
  /** The position of the source */
  cite: PropTypes.string.isRequired,
  /** The call to action to use */
  cta: PropTypes.string.isRequired,
  /** The link to use  */
  href: PropTypes.string,
};

export default Blockquote;
