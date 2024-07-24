import { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

import ShikiHighlight from './shiki-highlight';
import GitHubIcon from './github-icon';
import ActionJob from './action-job';

import { config, WEBHOOK, DEFAULT, WORKFLOW_NAME, SCHEDULE, PG_VERSION, SSL_NAME } from '../const/code-config';

const HeroAnimation = () => {
  const { file, language, text } = config[DEFAULT].code[1];
  //   const { file, language, text } = config[WEBHOOK].code[2];

  gsap.registerPlugin(useGSAP);

  useGSAP(() => {
    let tl = gsap.timeline();

    tl.to('#capture-start-time-spinner', { opacity: 0, duration: 0.3, delay: 1, scale: 0, ease: 'back.in' })
      .to('#capture-start-time-check', {
        opacity: 1,
        duration: 0.3,
        delay: 0.1,
        scale: 1,
        ease: 'back.out',
      })
      .to('#jobs', {
        x: -258,
        duration: 1.2,
        ease: 'back.inOut',
      })
      .to('#dump-and-restore-spinner', { opacity: 0, duration: 0.3, delay: 3, scale: 0, ease: 'back.in' })
      .to('#dump-and-restore-check', {
        opacity: 1,
        duration: 0.3,
        delay: 0.1,
        scale: 1,
        ease: 'back.out',
      })
      .to('#jobs', {
        x: -516,
        duration: 1.2,
        ease: 'back.inOut',
      })
      .to('#capture-end-time-spinner', { opacity: 0, duration: 0.3, delay: 1, scale: 0, ease: 'back.in' })
      .to('#capture-end-time-check', {
        opacity: 1,
        duration: 0.3,
        delay: 0.1,
        scale: 1,
        ease: 'back.out',
      });
  });

  return (
    <div className='relative overflow-hidden'>
      <div className='absolute top-1/2 right-0 z-10 shadow-xl w-64 h-44'>
        <div className='bg-brand-surface border border-brand-border rounded h-full'>
          <div className='flex flex-col gap-3 p-4'>
            <GitHubIcon className='h-8 w-8 text-white' />
            <div className='flex flex-col gap-0.5'>
              <strong className='block text-white leading-5'>create-neon-twin.yml</strong>
              <small className='text-brand-gray-200 text-xs'>Midnight ET (us-east-1)</small>
            </div>
          </div>
          <div className='relative h-10 overflow-hidden'>
            <div id='jobs' className='absolute top-0 left-4 flex gap-10 h-10'>
              <div className='absolute top-[19px] w-full h-[1px] pl-4 pr-4 bg-brand-gray-400/40' />
              <ActionJob text='capture-start-time' time='1s' position='start' />
              <ActionJob text='dump-and-restore' time='h1 1m' />
              {/* <ActionJob text='db-query' time='36s' /> */}
              <ActionJob text='capture-end-time' time='1s' position='end' />
              {/* <ActionJob text='post-to-slack-success' time='6s' position='end' /> */}
            </div>
          </div>
        </div>
      </div>
      <ShikiHighlight
        className='text-[.6rem] pointer-events-none select-none w-[440px]'
        file={file}
        language={language}
        text={text({
          workflowName: WORKFLOW_NAME,
          schedule: SCHEDULE,
          sslName: SSL_NAME,
          pgVersion: PG_VERSION,
        })}
      />
    </div>
  );
};

export default HeroAnimation;
