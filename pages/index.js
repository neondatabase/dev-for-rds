import Link from 'next/link';
import ButtonEffect from '../components/button-effect';
import ActionBuilder from '../components/action-builder';

const Page = () => {
  return (
    <div className='bg-brand-background'>
      <div className='flex flex-col gap-16 mx-auto max-w-6xl px-4 pt-16 pb-40'>
        <section>
          <div className='grid xl:grid-cols-2 gap-8 items-center'>
            <div className='flex flex-col gap-4 xl:gap-6'>
              <span className='self-center xl:self-start border border-brand-primary/20 text-brand-primary text-sm font-semibold rounded-full py-1 px-4 bg-gradient-to-b from-transparent to-brand-primary/10'>
                Getting Started
              </span>
              <h1 className='text-5xl sm:text-7xl text-center xl:text-left'>Twin Thing</h1>
              <p className='text-base sm:text-xl text-center xl:text-left max-w-2xl mx-auto xl:mx-0'>
                Optimize your workflow with Neon by automating RDS Production Database synchronization using nightly
                GitHub Actions.
              </p>
              <div className='flex items-center justify-center xl:justify-start gap-4 pt-4'>
                <ButtonEffect>
                  <Link
                    href='/#github-action-builder'
                    className='relative flex items-center justify-center bg-brand-primary text-brand-background font-semibold text-lg rounded-full border border-transparent hover:bg-brand-primary-light transition-colors duration-200 min-h-[52px] min-w-[150px] z-10 no-underline select-none'
                  >
                    Start Here
                  </Link>
                </ButtonEffect>
              </div>
            </div>
            <div className='flex items-center min-h-[600px] mx-auto w-full max-w-xl'>
              <svg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 400 300' className='rounded-lg'>
                <rect width='400' height='300' className='fill-brand-surface' />
              </svg>
            </div>
          </div>
        </section>
        <section>
          <div className='flex flex-col gap-2 px-6 py-12 bg-brand-surface rounded-lg'>
            <h2 className='text-center text-2xl sm:text-3xl '>Lorem ipsum dolor sit amet</h2>
            <p className='text-center'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum ullamcorper leo eget orci scelerisque
              sagittis.
            </p>
            <a
              href='https://neon.tech/blog/how-to-use-postgres-at-the-edge'
              target='_blank'
              rel='noopener'
              className='inline-flex items-center self-center gap-1 no-underline hover:text-brand-primary group'
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
        </section>
      </div>
      <section id='github-action-builder'>
        <ActionBuilder />
      </section>
    </div>
  );
};

export default Page;
