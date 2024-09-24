import PropTypes from 'prop-types';
import Image from 'next/image';

const BlogPostCard = ({ title, profile, author, date, href, image }) => {
  const isProd = process.env.NODE_ENV === 'production';

  return (
    <a href={href} target='_blank' rel='noopener' className='flex flex-col gap-3 no-underline  group'>
      <div className='rounded-md overflow-hidden'>
        <Image
          src={isProd ? `${process.env.NEXT_PUBLIC_REWRITE_PREFIX}/static/${image}` : `/static/${image}`}
          width={600}
          height={315}
          quality={100}
          alt={title}
          className='m-0 group-hover:scale-110 transition-all duration-300'
        />
      </div>
      <div>
        <h2 className='text-base sm:text-lg !leading-tight group-hover:text-brand-primary transition-colors duration-300'>
          {title}
        </h2>
      </div>
      {author ? (
        <div className='flex gap-2 items-center'>
          <Image
            src={isProd ? `${process.env.NEXT_PUBLIC_REWRITE_PREFIX}/static/${profile}` : `/static/${profile}`}
            width={40}
            height={40}
            alt={title}
            className='m-0 rounded-full overflow-hidden w-8 h-8 shrink-0'
          />
          <div className='flex gap-0 sm:gap-1 flex-col sm:flex-row'>
            <span className='font-normal text-sm text-brand-gray-200 leading-4'>{author}</span>
            <span className='font-normal text-sm text-brand-gray-500 hidden sm:block'>&bull;</span>
            <span className='font-normal text-sm text-brand-gray-400 uppercase leading-4'>{date}</span>
          </div>
        </div>
      ) : null}
    </a>
  );
};

BlogPostCard.propTypes = {
  /** The title to display  */
  title: PropTypes.string.isRequired,
  /** The authors profile photo */
  profile: PropTypes.string,
  /** The author to display  */
  author: PropTypes.string,
  /** The date to display */
  date: PropTypes.string,
  /** The link to use  */
  href: PropTypes.string.isRequired,
  /** The name of the image */
  image: PropTypes.string.isRequired,
};

export default BlogPostCard;
