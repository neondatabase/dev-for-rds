import Image from 'next/image';

const FancyCard = ({ children }) => {
  const isProd = process.env.NODE_ENV === 'production';
  const rightGlow = 'right-glow.avif';
  const leftGlow = 'left-glow.avif';
  const bgPattern = 'bg-pattern.png';

  return (
    <div className='relative w-full overflow-hidden rounded-lg border border-brand-border'>
      <div className='pointer-events-none absolute inset-0 rounded-[inherit]'>
        <Image
          src={isProd ? `${process.env.NEXT_PUBLIC_REWRITE_PREFIX}/static/${rightGlow}` : `/static/${rightGlow}`}
          width={617}
          height={776}
          quality={100}
          alt=''
          className='m-0 absolute top-0 right-0'
        />
        <Image
          src={isProd ? `${process.env.NEXT_PUBLIC_REWRITE_PREFIX}/static/${leftGlow}` : `/static/${leftGlow}`}
          width={430}
          height={650}
          quality={100}
          alt=''
          className='m-0 absolute bottom-0 left-0'
        />
        <div
          className={`absolute inset-px rounded-[inherit] bg-[url('${
            isProd ? `${process.eventNames.NEXT_PUBLIC_REWRITE_PREFIX}/static/${bgPattern}` : `/static/${bgPattern}`
          }')] bg-[6px,3.45px]`}
        />
        <div className='absolute inset-0 rounded-[inherit] border border-white mix-blend-overlay' />
      </div>
      {children}
    </div>
  );
};

export default FancyCard;
