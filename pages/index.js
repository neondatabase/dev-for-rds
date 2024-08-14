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
import QuoteIcon from '../components/quote-icon';

import { WORKFLOW_NAME, SCHEDULE, PG_VERSION, DEFAULT, SSL_NAME } from '../const/code-config';
import { appState, hashId } from '../state';
import { scrollToElement } from '../utils/scroll-to-element';

const Page = () => {
  const isProd = process.env.NODE_ENV === 'production';

  const getImageUrl = (path) => {
    return isProd ? `${process.env.NEXT_PUBLIC_REWRITE_PREFIX}${path}` : path;
  };

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

    window.addEventListener('load', () => {
      if (hashId) {
        scrollToElement();
      }
    });
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
      <div className='flex flex-col gap-32 xl:gap-52 mx-auto max-w-4xl xl:max-w-7xl px-4 pt-32 pb-40'>
        <section>
          <div className='grid grid-cols-1 xl:grid-cols-2 gap-24 items-center'>
            <div className='flex flex-col gap-4 xl:gap-6'>
              <LozengeChip text='build faster on postgres' />
              <h1 className='text-3xl sm:text-6xl text-center xl:text-left'>Move dev to Neon, keep prod on AWS RDS</h1>
              <p className='text-base sm:text-xl text-center xl:text-left max-w-2xl mx-auto xl:mx-0'>
                Build new features on Neon Postgres while keeping your prod database in AWS RDS. Start shipping faster
                while saving money.
              </p>
              <div className='flex items-center justify-center xl:justify-start gap-4 pt-4'>
                <ButtonEffect>
                  <Link
                    href=''
                    className='relative flex items-center justify-center bg-brand-primary text-brand-background font-semibold text-lg rounded-full border border-transparent hover:bg-brand-primary-light transition-colors duration-200 min-h-[52px] min-w-[150px] z-10 no-underline select-none'
                    onClick={handleClick}
                  >
                    Start here
                  </Link>
                </ButtonEffect>
              </div>
            </div>
            <HeroAnimation />
          </div>
        </section>

        <section className='grid grid-cols-1 lg:grid-cols-2 gap-16'>
          <div className='flex flex-col gap-1 items-center justify-center w-full h-full bg-brand-surface rounded px-8 pt-8 pb-10 mx-auto  max-w-lg xl:max-w-2xl'>
            <QuoteIcon className='w-20 h-20' />
            <h2 className='m-0 italic font-normal text-center'>
              "RDS becomes a bottleneck if you don't have full-time DevOps dedicated to it"
            </h2>
            <div className='flex gap-1'>
              <span className='italic text-white'>Every</span>
              <span className='text-brand-gray-400'>&bull;</span>
              <span className='italic text-brand-gray-200'>developer</span>
            </div>
          </div>
          <div className='flex flex-col gap-8 items-center self-center'>
            <div className='flex flex-col gap-3 max-w-2xl'>
              <h2 className='text-center lg:text-left text-3xl lg:text-4xl'>AWS RDS is slowing your team down</h2>
              <p className='text-center lg:text-left'>
                AWS RDS is the most widely used Postgres for production workloads, but the developer experience is bare
                bones—it's hard to build fast on RDS:
              </p>
              <ul className='mx-auto lg:m-0'>
                <li>Provisioning new dev environments takes time</li>
                <li>It's hard to keep data in sync between dev and prod</li>
                <li>Team collaboration is painful</li>
                <li>Dev environments get expensive quick</li>
              </ul>
            </div>
            <a
              href='https://neon.tech/blog/development-environments-for-aws-rds-using-neon-postgres'
              target='_blank'
              rel='noopener'
              className='relative flex self-center justify-center lg:self-start bg-brand-primary text-brand-background font-semibold text-sm px-6 py-3 rounded-full border border-transparent hover:bg-brand-primary-light transition-colors duration-200 no-underline select-none min-w-[120px]'
            >
              Read more
            </a>
          </div>
        </section>

        <section className='grid grid-cols-1 lg:grid-cols-2 gap-16 items-center'>
          <div className='flex flex-col gap-8 items-center self-center'>
            <div className='flex flex-col gap-3 max-w-2xl'>
              <h2 className='text-center lg:text-left text-3xl lg:text-4xl'>
                Move your dev / test environments to Neon
              </h2>
              <p className='text-center lg:text-left'>
                Neon is a serverless Postgres database built to streamline development workflows. Due to its unique
                architecture, Neon is more agile, efficient, and developer-friendly than any other Postgres.
              </p>
              <ul className='mx-auto lg:m-0'>
                <li>Provisioning new environments takes &lt;1s</li>
                <li>Branch data like you branch code</li>
                <li>Dev databases scale to zero when inactive</li>
                <li>Neon is shockingly affordable</li>
              </ul>
            </div>
            <Link
              href='https://www.neon.tech'
              target='_blank'
              rel='noopener'
              className='relative flex self-center justify-center lg:self-start bg-brand-primary text-brand-background font-semibold text-sm px-6 py-3 rounded-full border border-transparent hover:bg-brand-primary-light transition-colors duration-200 no-underline select-none min-w-[150px]'
            >
              Explore Neon
            </Link>
          </div>
          <Image
            src={getImageUrl('/static/site-images-neon-features.jpg')}
            width={720}
            height={450}
            quality={100}
            alt='Screenshot of Neon features'
            className='m-0 mx-auto w-full max-w-lg xl:max-w-3xl border border-brand-border rounded overflow-hidden'
          />
        </section>

        <section className='grid grid-cols-1 lg:grid-cols-2 gap-16 items-center'>
          <Image
            src={getImageUrl('/static/site-images-twin-thing-screenshot.jpg')}
            width={720}
            height={450}
            quality={100}
            alt='Screenshot of Twin Thing'
            className='m-0 mx-auto w-full max-w-lg xl:max-w-3xl border border-brand-border rounded overflow-hidden'
          />
          <div className='flex flex-col gap-8 items-center self-center order-first lg:order-last'>
            <div className='flex flex-col gap-3 max-w-2xl'>
              <h2 className='text-center lg:text-left text-3xl lg:text-4xl'>Build your workflow with Twin Thing</h2>
              <p className='text-center lg:text-left'>
                Twin Thing is an app that helps you build a Neon twin for your RDS prod.Use it to build a GitHub Action
                that automatically syncs your production database with Neon, and add Slack alerts to monitor the jobs.
              </p>
            </div>
            <Link
              href=''
              className='relative flex self-center justify-center lg:self-start bg-brand-primary text-brand-background font-semibold text-sm px-6 py-3 rounded-full border border-transparent hover:bg-brand-primary-light transition-colors duration-200 no-underline select-none min-w-[120px]'
              onClick={handleClick}
            >
              Start here
            </Link>
          </div>
        </section>

        <section className='flex flex-col gap-16 items-center'>
          <div className='flex flex-col gap-3 mx-auto max-w-2xl'>
            <h2 className='text-center text-3xl sm:text-4xl'>Dive deeper</h2>
            <p className='text-center'>Explore our blog posts and guides.</p>
          </div>
          <div className='grid sm:grid-cols-3 gap-16 xl:gap-8'>
            <BlogPostCard
              title='Optimize Your AWS RDS Dev Environments With Neon Postgres'
              profile='profile-brad-van-vugt-photo.jpg'
              author='Brad Van Vugt'
              date='Jul 16, 2024'
              href='https://neon.tech/blog/development-environments-for-aws-rds-using-neon-postgres'
              image='neon-rds-development.jpg'
            />
            <BlogPostCard
              title='Neon Twin: Move Dev/Test/Staging to Neon, Keep Production on RDS'
              profile='profile-brad-van-vugt-photo.jpg'
              author='Brad Van Vugt'
              date='Jul 24, 2024'
              href='https://neon.tech/blog/optimizing-dev-environments-in-aws-rds-with-neon-postgres-part-ii-using-github-actions-to-mirror-rds-in-neon'
              image='neon-rds-part-ii.jpg'
            />
            <BlogPostCard
              title='Building Slack notifications to monitor pg_dump and restore workflows'
              profile='profile-rishi-raj-jain.jpg'
              author='Rishi Raj Jain'
              date='Aug 01, 2024'
              href='https://neon.tech/blog/building-slack-notifications-to-monitor-pg_dump-and-restore-workflows'
              image='neon-slack.jpg'
            />
            <BlogPostCard
              title='tbd'
              profile='profile-placeholder.jpg'
              author='tbd'
              date='xxx xx, 2024'
              href='https://neon.tech/'
              image='site-images-placeholder.jpg'
            />
            <BlogPostCard
              title='tbd'
              profile='profile-placeholder.jpg'
              author='tbd'
              date='xxx xx, 2024'
              href='https://neon.tech/'
              image='site-images-placeholder.jpg'
            />
            <BlogPostCard
              title='tbd'
              profile='profile-placeholder.jpg'
              author='tbd'
              date='xxx xx, 2024'
              href='https://neon.tech/'
              image='site-images-placeholder.jpg'
            />
          </div>
        </section>
      </div>
      <section
        id={hashId}
        className='mx-auto max-w-8xl [@media(min-width:110rem)]:border-l [@media(min-width:110rem)]:border-r [@media(min-width:110rem)]:border-l-brand-border [@media(min-width:110rem)]:border-r-brand-border'
      >
        <ActionBuilder />
      </section>
    </div>
  );
};

export default Page;
