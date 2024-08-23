import Image from 'next/image';
import { getImageUrl } from '../utils/get-image-url';

const FancyCard = ({ children }) => {
  const isProd = process.env.NODE_ENV === 'production';
  const bgPattern = 'bg-pattern.png';

  return (
    <div className='relative'>
      <div className='pointer-events-none absolute inset-0 rounded overflow-hidden'>
        <Image
          src={getImageUrl('right-glow.avif')}
          width={617}
          height={776}
          quality={100}
          alt=''
          className='m-0 absolute top-0 right-0'
        />
        <Image
          src={getImageUrl('left-glow.avif')}
          width={430}
          height={650}
          quality={100}
          alt=''
          className='m-0 absolute bottom-0 left-0'
        />
        <div
          className='absolute inset-px rounded-[inherit] bg-[6px,3.45px]'
          style={{
            backgroundImage: `url('${
              isProd ? `${process.env.NEXT_PUBLIC_REWRITE_PREFIX}/static/${bgPattern}` : `/static/${bgPattern}`
            }')`,
          }}
        />

        <div className='absolute inset-0 rounded-[inherit] border border-white mix-blend-overlay' />
      </div>
      {children}
    </div>
  );
};

export default FancyCard;
