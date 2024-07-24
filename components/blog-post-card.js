import PropTypes from 'prop-types';

import LozengeChip from './lozenge-chip';

const BlogPostCard = ({ title, description, href }) => {
  return (
    <div className='flex flex-col gap-3 px-4 pt-6 pb-4 xl:px-6 xl:pt-8 xk:pb-6 bg-brand-surface/70 rounded-lg'>
      <LozengeChip text='workflows' className='text-xs self-start' />
      <h2 className='text-xl sm:text-2xl '>{title}</h2>
      <p className='grow'>{description}</p>
      <a
        href={href}
        target='_blank'
        rel='noopener'
        className='inline-flex items-center gap-1 no-underline hover:text-brand-primary group'
      >
        Read post
        <svg
          xmlns='http://www.w3.org/2000/svg'
          fill='none'
          viewBox='0 0 24 24'
          strokeWidth={1.5}
          stroke='currentColor'
          className='inline-block mt-1 w-5 h-5 transition-transform duration-200 group-hover:translate-x-[3px]'
        >
          <path strokeLinecap='round' strokeLinejoin='round' d='M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3' />
        </svg>
      </a>
    </div>
  );
};

BlogPostCard.propTypes = {
  /** The title to display  */
  title: PropTypes.string,
  /** The description to display  */
  description: PropTypes.string,
  /** The link to use  */
  href: PropTypes.string,
};

export default BlogPostCard;
