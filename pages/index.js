import { useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { useAtom } from 'jotai';

import HeroAnimation from '../components/hero-animation';
import ButtonEffect from '../components/button-effect';
import LozengeChip from '../components/lozenge-chip';
import ActionBuilder from '../components/action-builder';
import BlogPostCard from '../components/blog-post-card';

import { WORKFLOW_NAME, SCHEDULE, PG_VERSION, DEFAULT, SSL_NAME } from '../const/code-config';
import { appState, hashId } from '../state';
import { scrollToElement } from '../utils/scroll-to-element';

const Page = () => {
  const isProd = process.env.NODE_ENV === 'production';
  const router = useRouter();

  const [state, setState] = useAtom(appState);

  const updateSearchParams = async () => {
    const searchParams = new URLSearchParams({
      workflowName: state.workflowName,
      schedule: state.schedule,
      pgVersion: state.pgVersion,
      job: state.job,
      sslName: state.sslName,
    }).toString();

    const href = `/#${state.hash}?${searchParams}`;
    await router.push(href, undefined, { shallow: true });
  };

  useEffect(() => {
    if (state.hash) {
      setTimeout(() => {
        updateSearchParams();
      }, 300);
    }
  }, [state.hash]);

  useEffect(() => {
    const { hash } = window.location;
    const hashId = hash.substring(1).split('?')[0];
    const params = new URLSearchParams(hash.includes('?') ? hash.split('?')[1] : '');

    if (hashId) {
      setState({
        workflowName: params.get('workflowName'),
        schedule: params.get('schedule'),
        pgVersion: params.get('pgVersion'),
        job: params.get('job'),
        sslName: params.get('sslName'),
        hash: hashId,
      });
      setTimeout(() => {
        scrollToElement();
      }, 300);
    } else {
      setState({
        workflowName: WORKFLOW_NAME,
        schedule: SCHEDULE,
        pgVersion: PG_VERSION,
        job: DEFAULT,
        sslName: SSL_NAME,
        hash: '',
      });
    }
  }, []);

  const handleClick = async (event) => {
    event.preventDefault();
    setState((prevState) => ({
      ...prevState,
      hash: hashId,
    }));

    scrollToElement();
  };

  if (Object.keys(state).every((key) => state[key] === null || state[key] === '')) return;

  return (
    <div className='bg-brand-background'>
      <div className='flex flex-col gap-20 xl:gap-52 mx-auto max-w-4xl xl:max-w-6xl px-4 pt-28 pb-40'>
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
                    href=''
                    className='relative flex items-center justify-center bg-brand-primary text-brand-background font-semibold text-lg rounded-full border border-transparent hover:bg-brand-primary-light transition-colors duration-200 min-h-[52px] min-w-[150px] z-10 no-underline select-none'
                    onClick={handleClick}
                  >
                    Start Here
                  </Link>
                </ButtonEffect>
              </div>
            </div>
            <HeroAnimation />
          </div>
        </section>
        <section className='grid grid-cols-1 lg:grid-cols-2 gap-16'>
          <Image
            src={
              isProd
                ? `${process.env.NEXT_PUBLIC_REWRITE_PREFIX}/static/site-images-twin-thing-screenshot.jpg`
                : `/static/site-images-twin-thing-screenshot.jpg`
            }
            width={720}
            height={450}
            quality={100}
            alt='Screenshot of Twin Thing'
            className='m-0 mx-auto w-full max-w-lg border border-brand-border rounded overflow-hidden'
          />
          <div className='flex flex-col gap-8 items-center self-center order-first lg:order-last'>
            <div className='flex flex-col gap-3 max-w-2xl'>
              <h2 className='text-center lg:text-left text-3xl lg:text-4xl'>GitHub Action Builder</h2>
              <p className='text-center lg:text-left'>
                Twin Thing can help you build a GitHub Action that automatically syncs your Production database with a
                Neon Twin and / or create a customizable Slack notification message.
              </p>
            </div>
            <Link
              href=''
              className='relative flex self-center justify-center lg:self-start bg-brand-primary text-brand-background font-semibold text-sm px-6 py-3 rounded-full border border-transparent hover:bg-brand-primary-light transition-colors duration-200 no-underline select-none min-w-[150px]'
              onClick={handleClick}
            >
              Start Here
            </Link>
          </div>
        </section>
        <section className='grid grid-cols-1 lg:grid-cols-2 gap-16'>
          <div className='flex flex-col gap-8 items-center self-center'>
            <div className='flex flex-col gap-3 max-w-2xl'>
              <h2 className='text-center lg:text-left text-3xl lg:text-4xl'>Neon features</h2>
              <p className='text-center lg:text-left'>
                By setting up a Neon Serverless PostgreSQL database as your RDS production twin, you can leverage some
                of our top development features.
              </p>
              <ul>
                <li>Instant database branches</li>
                <li>Unique branches for each engineer</li>
                <li>Affordable non-prod environments</li>
              </ul>
            </div>
            <Link
              href='https://www.neon.tech'
              className='relative flex self-center justify-center lg:self-start bg-brand-primary text-brand-background font-semibold text-sm px-6 py-3 rounded-full border border-transparent hover:bg-brand-primary-light transition-colors duration-200 no-underline select-none min-w-[150px]'
            >
              Find out more
            </Link>
          </div>
          <Image
            src={
              isProd
                ? `${process.env.NEXT_PUBLIC_REWRITE_PREFIX}/static/site-images-neon-features.jpg`
                : `/static/site-images-neon-features.jpg`
            }
            width={720}
            height={450}
            quality={100}
            alt='Screenshot of Twin Thing'
            className='m-0 mx-auto w-full max-w-lg border border-brand-border rounded overflow-hidden'
          />
        </section>
        <section className='flex flex-col gap-16'>
          <div className='flex flex-col gap-3 mx-auto max-w-2xl'>
            <h2 className='text-center text-3xl sm:text-4xl'>Lorem ipsum dolor sit amet</h2>
            <p className='text-center'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed libero diam, commodo vitae vulputate ut,
              tempor vitae neque. Nunc ut nisl et massa gravida egestas. Sed mollis, diam feugiat sodales interdum.
            </p>
          </div>
          <div className='grid sm:grid-cols-3 gap-4 xl:gap-8'>
            <BlogPostCard
              title='Optimize Your AWS RDS Dev Environments With Neon Postgres'
              profile='brad-van-vugt-photo.jpg'
              author='Brad Van Vugt'
              date='Jul 16, 2024'
              href='https://neon.tech/blog/development-environments-for-aws-rds-using-neon-postgres'
              image='neon-rds-development.jpg'
            />
            <BlogPostCard
              title='Neon Twin: Move Dev/Test/Staging to Neon, Keep Production on RDS'
              profile='brad-van-vugt-photo.jpg'
              author='Brad Van Vugt'
              date='Jul 24, 2024'
              href='https://neon.tech/blog/optimizing-dev-environments-in-aws-rds-with-neon-postgres-part-ii-using-github-actions-to-mirror-rds-in-neon'
              image='neon-rds-part-ii.jpg'
            />
            <BlogPostCard
              title='Placeholder ipsum dolor sit amet, consectetur adipiscing elit. Sed libero diam.'
              profile='brad-van-vugt-photo.jpg'
              author='placeholder'
              date='xx xx, 2024'
              href='https://neon.tech/'
              image='neon-deploy-faster.jpg'
            />
          </div>
        </section>
      </div>
      <section id={hashId}>
        <ActionBuilder />
      </section>
    </div>
  );
};

export default Page;
