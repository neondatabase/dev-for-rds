import { useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useAtom } from 'jotai';

import HeroAnimation from '../components/hero-animation';
import ActionBuilder from '../components/action-builder';
import FancyCard from '../components/fancy-card';
import BlogPostCard from '../components/blog-post-card';

import BranchIcon from '../components/branch-icon';
import SyncIcon from '../components/sync-icon';
import RefreshIcon from '../components/refresh-icon';
import ClockIcon from '../components/clock-icon';
import SignalIcon from '../components/signal-icon';
import FrownIcon from '../components/frown-icon';
import BanknotesIcon from '../components/banknotes-icon';
import Blockquote from '../components/block-quote';
import DollarIcon from '../components/dollar-icon';
import BoltIcon from '../components/bolt-icon';
import PointInIcon from '../components/point-in-icon';

import {
  TWIN_WORKFLOW_NAME,
  TWIN_SCHEDULE,
  TWIN_PG_VERSION,
  TWIN_DEFAULT,
  TWIN_SSL_NAME,
  REVERSE_TWIN_WORKFLOW_NAME,
  REVERSE_TWIN_SQL,
} from '../const/code-config';

import { appState, hashId } from '../state';
import { scrollToElement } from '../utils/scroll-to-element';

import { convertStringParamToBoolean } from '../utils/convert-string-param-to-boolean';
import { convertStringParamToNull } from '../utils/convert-string-param-to-null';

const pumpCta = 'pump-cta.jpg';

const Page = () => {
  const isProd = process.env.NODE_ENV === 'production';
  const router = useRouter();

  const [state, setState] = useAtom(appState);

  const sendZarazEvent = (tagName, text) => {
    if (window.zaraz) {
      window.zaraz.track('Button Clicked', { tag_name: tagName, text: text });
    }
  };

  const updateSearchParams = async () => {
    const searchParams = new URLSearchParams({
      twin: state.twin,
      twinWorkflowName: state.twinWorkflowName,
      twinSchedule: state.twinSchedule,
      twinJob: state.twinJob,
      twinSSLName: state.twinSSLName,

      reverseTwin: state.reverseTwin,
      reverseTwinWorkflowName: state.reverseTwinWorkflowName,
      reverseTwinJob: state.reverseTwinJob,
      reverseTwinSubJob: state.reverseTwinSubJob,

      pgVersion: state.pgVersion,
    }).toString();

    const href = `/#${state.hash}?${searchParams}`;
    await router.push(href, undefined, { shallow: true });
  };

  useEffect(() => {
    if (state.hash) {
      setTimeout(() => {
        scrollToElement();
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
        twin: convertStringParamToBoolean(params, 'twin'),
        twinWorkflowName: params.get('twinWorkflowName'),
        twinSchedule: params.get('twinSchedule'),
        twinJob: params.get('twinJob'),
        twinSSLName: params.get('twinSSLName'),

        reverseTwin: convertStringParamToBoolean(params, 'reverseTwin'),
        reverseTwinWorkflowName: params.get('reverseTwinWorkflowName'),
        reverseTwinJob: params.get('reverseTwinJob'),
        reverseTwinSubJob: convertStringParamToNull(params, 'reverseTwinSubJob'),

        pgVersion: params.get('pgVersion'),
        hash: hashId,
      });
    } else {
      setState({
        twin: true,
        twinWorkflowName: TWIN_WORKFLOW_NAME,
        twinSchedule: TWIN_SCHEDULE,
        twinJob: TWIN_DEFAULT,
        twinSSLName: TWIN_SSL_NAME,
        reverseTwin: false,
        reverseTwinWorkflowName: REVERSE_TWIN_WORKFLOW_NAME,
        reverseTwinJob: REVERSE_TWIN_SQL,
        reverseTwinSubJob: null,
        pgVersion: TWIN_PG_VERSION,
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
    <div className='flex flex-col gap-48 bg-brand-background px-4 pb-16'>
      <div className='mx-auto w-full max-w-6xl'>
        <section>
          <div className='grid grid-cols-1 xl:grid-cols-2 gap-24 items-center pt-32'>
            <div className='flex flex-col gap-4 xl:gap-6'>
              <h1 className='text-center text-3xl lg:text-6xl xl:text-left lg:!leading-[4rem]'>
                Move dev to Neon, keep prod on AWS RDS
              </h1>
              <p className='text-base sm:text-xl text-center xl:text-left max-w-2xl mx-auto xl:mx-0'>
                Build new features on Neon Postgres while keeping your prod database in AWS RDS. Start shipping faster
                while saving money.
              </p>
              <div className='flex items-center justify-center xl:justify-start gap-4 pt-4'>
                <Link
                  href=''
                  className='relative flex items-center justify-center bg-brand-primary text-brand-background font-semibold text-lg rounded-full border border-transparent hover:bg-brand-primary-light transition-colors duration-300 min-h-[52px] min-w-[150px] z-10 no-underline select-none'
                  onClick={handleClick}
                >
                  Start here
                </Link>
              </div>
            </div>
            <HeroAnimation />
          </div>
        </section>
      </div>
      <div className='flex flex-col gap-32 mx-auto w-full max-w-6xl'>
        <section className='flex flex-col gap-16'>
          <div className='flex flex-col gap-16 max-w-4xl'>
            <div className='flex flex-col gap-1'>
              <h2 className='text-3xl sm:text-4xl'>AWS RDS is slowing your team down</h2>
              <p>
                AWS RDS is the most widely used Postgres for production workloads, but the developer experience is bare
                bones — it's hard to build fast on RDS:
              </p>
            </div>
            <div>
              <ul className='flex flex-col gap-8 pl-0 lg:pl-8 list-none max-w-xl'>
                <li className='flex items-start gap-4 m-0 p-0 leading-6'>
                  <div className='relative flex size-6 shrink-0 items-center justify-center rounded box-gradient mt-0.5'>
                    <ClockIcon />
                    <div className='absolute inset-0 rounded-[inherit] mix-blend-overlay border-gradient' />
                  </div>
                  Provisioning new dev environments takes time.
                </li>
                <li className='flex items-start gap-4 m-0 p-0 leading-6'>
                  <div className='relative flex size-6 shrink-0 items-center justify-center rounded box-gradient mt-0.5'>
                    <SignalIcon />
                    <div className='absolute inset-0 rounded-[inherit] mix-blend-overlay border-gradient' />
                  </div>
                  It's hard to keep data in sync between dev and prod.
                </li>
                <li className='flex items-start gap-4 m-0 p-0 leading-6'>
                  <div className='relative flex size-6 shrink-0 items-center justify-center rounded box-gradient mt-0.5'>
                    <FrownIcon />
                    <div className='absolute inset-0 rounded-[inherit] mix-blend-overlay border-gradient' />
                  </div>
                  Team collaboration is painful.
                </li>
                <li className='flex items-start gap-4 m-0 p-0 leading-6'>
                  <div className='relative flex size-6 shrink-0 items-center justify-center rounded box-gradient mt-0.5'>
                    <BanknotesIcon />
                    <div className='absolute inset-0 rounded-[inherit] mix-blend-overlay border-gradient' />
                  </div>
                  Dev environments get expensive quick.
                </li>
              </ul>
            </div>
            <Blockquote
              quote='The RDS developer experience is not quite there. The AWS console and APIs are quite convoluted and
                require extensive setup and configuration to achieve even basic tasks.'
              profile='profile-guido-marucci-blas.jpg'
              source='Guido Marucci'
              cite='co-founder at Cedalio'
              cta='Read more'
              href='https://neon.tech/blog/development-environments-for-aws-rds-using-neon-postgres'
            />
          </div>
        </section>

        <section className='flex flex-col gap-16'>
          <div className='flex flex-col gap-16 max-w-4xl'>
            <div className='flex flex-col gap-1'>
              <h2 className='text-3xl sm:text-4xl'>Move your dev/stage/test environments to Neon</h2>
              <p>
                Neon is a serverless Postgres database built to streamline development workflows. Due to its unique
                architecture, Neon is more agile, efficient, and developer-friendly than any other Postgres.
              </p>
            </div>
            <div>
              <ul className='flex flex-col gap-8 pl-0 lg:pl-8 list-none max-w-xl'>
                <li className='flex items-start gap-4 m-0 p-0 leading-6'>
                  <div className='relative flex size-6 shrink-0 items-center justify-center rounded box-gradient mt-0.5'>
                    <BoltIcon />
                    <div className='absolute inset-0 rounded-[inherit] mix-blend-overlay border-gradient' />
                  </div>
                  Provisioning new environments takes &#60;1s.
                </li>
                <li className='flex items-start gap-4 m-0 p-0 leading-6'>
                  <div className='relative flex size-6 shrink-0 items-center justify-center rounded box-gradient mt-0.5'>
                    <BranchIcon />
                    <div className='absolute inset-0 rounded-[inherit] mix-blend-overlay border-gradient' />
                  </div>
                  Branch data like you branch code.
                </li>
                <li className='flex items-start gap-4 m-0 p-0 leading-6'>
                  <div className='relative flex size-6 shrink-0 items-center justify-center rounded box-gradient mt-0.5'>
                    <PointInIcon />
                    <div className='absolute inset-0 rounded-[inherit] mix-blend-overlay border-gradient' />
                  </div>
                  Dev databases scale to zero when inactive.
                </li>
                <li className='flex items-start gap-4 m-0 p-0 leading-6'>
                  <div className='relative flex size-6 shrink-0 items-center justify-center rounded box-gradient mt-0.5'>
                    <DollarIcon />
                    <div className='absolute inset-0 rounded-[inherit] mix-blend-overlay border-gradient' />
                  </div>
                  Neon is shockingly affordable.
                </li>
              </ul>
            </div>
            <Blockquote
              quote='Neon allows us to develop much faster than we’ve ever been used to. Instead of putting a lot of effort into getting a synthetic dataset within Docker or local Postgres, we just test in a Neon branch, with a perfect copy of production data.'
              profile='profile-alex-klarfeld.jpg'
              source='Alex Klarfeld,'
              cite='CEO and co-founder of Supergood.ai'
              cta='Explore case studies'
              href='https://neon.tech/case-studies'
            />
          </div>
        </section>

        <section className='flex flex-col gap-16'>
          <div className='flex flex-col gap-16 max-w-4xl'>
            <div>
              <h2 className='text-3xl sm:text-4xl'>Build a Neon Twin</h2>
              <p>
                <b className='font-bold'>You can take advantage of Neon's velocity without leaving RDS</b>. Duplicate
                your RDS dataset in Neon by creating a Neon Twin to host your non-prod environments:
              </p>
            </div>
            <div>
              <ul className='flex flex-col gap-8 pl-0 lg:pl-8 list-none max-w-xl'>
                <li className='flex items-start gap-4 m-0 p-0 leading-6'>
                  <div className='relative flex size-6 shrink-0 items-center justify-center rounded box-gradient mt-0.5'>
                    <SyncIcon />
                    <div className='absolute inset-0 rounded-[inherit] mix-blend-overlay border-gradient' />
                  </div>
                  Automate the sync between your production database and Neon with a custom GitHub Action.
                </li>
                <li className='flex items-start gap-4 m-0 p-0 leading-6'>
                  <div className='relative flex size-6 shrink-0 items-center justify-center rounded box-gradient mt-0.5'>
                    <BranchIcon />
                    <div className='absolute inset-0 rounded-[inherit] mix-blend-overlay border-gradient' />
                  </div>
                  Develop new features and run tests in your dev, stage, and test environments on Neon, using branching
                  to create instant duplicates.
                </li>
                <li className='flex items-start gap-4 m-0 p-0 leading-6'>
                  <div className='relative flex size-6 shrink-0 items-center justify-center rounded box-gradient mt-0.5'>
                    <RefreshIcon />
                    <div className='absolute inset-0 rounded-[inherit] mix-blend-overlay border-gradient' />
                  </div>
                  When ready, migrate your changes back to RDS with ease.
                </li>
              </ul>
            </div>
          </div>
          <div id={hashId}>
            <FancyCard>
              <ActionBuilder />
            </FancyCard>
          </div>
        </section>

        <section className='flex flex-col gap-8'>
          <div>
            <h2 className='text-3xl sm:text-4xl'>Resources</h2>
            <p>Explore our blog posts and guides.</p>
          </div>
          <div className='grid sm:grid-cols-3 gap-16 xl:gap-8'>
            <BlogPostCard
              title='Optimize your AWS RDS Dev Environments with Neon Postgres'
              profile='profile-brad-van-vugt-photo.jpg'
              author='Brad Van Vugt'
              date='Jul 16, 2024'
              href='https://neon.tech/blog/development-environments-for-aws-rds-using-neon-postgres'
              image='optimize_your_aws_rds.jpg'
            />
            <BlogPostCard
              title='Neon Twin: Move Dev/Test/Staging to Neon, Keep Production on RDS'
              profile='profile-brad-van-vugt-photo.jpg'
              author='Brad Van Vugt'
              date='Jul 24, 2024'
              href='https://neon.tech/blog/optimizing-dev-environments-in-aws-rds-with-neon-postgres-part-ii-using-github-actions-to-mirror-rds-in-neon'
              image='neon-twin-move-dev.jpg'
            />
            <BlogPostCard
              title='Building Slack notifications to monitor pg_dump and restore workflows'
              profile='profile-rishi-raj-jain.jpg'
              author='Rishi Raj Jain'
              date='Aug 01, 2024'
              href='https://neon.tech/blog/building-slack-notifications-to-monitor-pg_dump-and-restore-workflows'
              image='building-slack-notifications.jpg'
            />
            <BlogPostCard
              title='Neon Twin: How to deploy a change tested in Neon to prod in RDS'
              profile='profile-rishi-raj-jain.jpg'
              author='Rishi Raj Jain'
              date='Aug 15, 2024'
              href='https://neon.tech/blog/neon-twin-deploy-workflow'
              image='neon-twin-how-to-deploy-changes.jpg'
            />
            <BlogPostCard
              title='Database branching workflows: A guide for developers'
              profile='profile-carlota-soto.jpg'
              author='Carlota Soto'
              date='May 09, 2024'
              href='https://neon.tech/blog/database-branching-workflows-a-guide-for-developers'
              image='database-branching.jpg'
            />
            <BlogPostCard
              title='Adopting Neon branching in CI/CD pipelines: a practical story by Shepherd '
              profile='profile-carlota-soto.jpg'
              author='Carlota Soto'
              date='Jul 07, 2024'
              href='https://neon.tech/blog/adopting-neon-branching-in-ci-cd-pipelines-a-practical-story-by-shepherd'
              image='database-branching-shepherd.jpg'
            />
          </div>
        </section>
        <section>
          <div className='flex flex-col xl:flex-row gap-16 xl:gap-0'>
            <div className='flex flex-col justify-center gap-4 xl:py-20'>
              <h2 className='text-center xl:text-left text-3xl sm:text-4xl'>
                Still have <span className='text-brand-primary'>questions?</span>
              </h2>
              <p className='text-center xl:text-left text-base sm:text-xl'>
                Interested in learning more about our plans and pricing?
              </p>
              <div className='flex self-center xl:self-start pt-2'>
                <a
                  href='https://neon.tech/contact-sales'
                  target='_blank'
                  className='relative flex self-start items-center justify-center no-underline bg-brand-primary text-brand-background px-10 font-semibold text-lg rounded-full hover:bg-brand-primary-light transition-colors duration-200 min-w-auto sm:min-w-auto min-h-[52px] min-w-[150px] z-10'
                  onClick={() => sendZarazEvent('Sales CTA', 'Talk To sales')}
                >
                  Talk to Sales
                </a>
              </div>
            </div>
            <div className='mx-auto max-w-xl'>
              <Image
                src={isProd ? `${process.env.NEXT_PUBLIC_REWRITE_PREFIX}/static/${pumpCta}` : `/static/${pumpCta}`}
                width={1400}
                height={895}
                alt='Neon Pump'
                className='m-0'
              />
            </div>
          </div>
          <hr className='border-brand-border my-0' />
        </section>
      </div>
    </div>
  );
};

export default Page;
