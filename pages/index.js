import Link from 'next/link';

import HeroAnimation from '../components/hero-animation';
import ButtonEffect from '../components/button-effect';
import LozengeChip from '../components/lozenge-chip';
import ActionBuilder from '../components/action-builder';
import BlogPostCard from '../components/blog-post-card';

const Page = () => {
  return (
    <div className='bg-brand-background'>
      <div className='flex flex-col gap-20 xl:gap-40 mx-auto max-w-6xl px-4 pt-28 pb-40'>
        <section>
          <div className='grid grid-cols-1 xl:grid-cols-2 gap-24 items-center'>
            <div className='flex flex-col gap-4 xl:gap-6'>
              <LozengeChip text='Getting Started' />
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

            <HeroAnimation />
          </div>
        </section>
        <section>
          <div className='grid xl:grid-cols-3 gap-4 xl:gap-8'>
            <BlogPostCard
              title='Optimize Your AWS RDS Dev Environments With Neon Postgres'
              description='Start shipping faster while saving money'
              href='https://neon.tech/blog/development-environments-for-aws-rds-using-neon-postgres'
            />
            <BlogPostCard
              title='Neon Twin: Move Dev/Test/Staging to Neon, Keep Production on RDS'
              description='Get "ship faster" gains without "migrate production" pain'
              href='https://neon.tech/blog/optimizing-dev-environments-in-aws-rds-with-neon-postgres-part-ii-using-github-actions-to-mirror-rds-in-neon'
            />
            <BlogPostCard
              title='Lorem ipsum dolor sit amet, consectetur adipiscing elit'
              description='Sed et leo eu nulla interdum molestie sed vel justo'
              href='https://neon.tech/'
            />
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
