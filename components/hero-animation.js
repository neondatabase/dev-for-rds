import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

import ShikiHighlight from './shiki-highlight';
import GitHubIcon from './github-icon';
import ActionJob from './action-job';
import ActionJobBlank from './action-job-blank';
import ActionClock from './action-clock';

import IconContainer from './icon-container';
import TimeIcon from './time-icon';
import AwsIcon from './aws-icon';
import NeonIcon from './neon-icon';
import QueryIcon from './query-icon';
import SlackIcon from './slack-icon';

import { config, WEBHOOK, DEFAULT, WORKFLOW_NAME, SCHEDULE, PG_VERSION, SSL_NAME } from '../const/code-config';

const HeroAnimation = () => {
  const { file, language, text } = config[DEFAULT].code[1];
  // const { file, language, text } = config[WEBHOOK].code[2];

  gsap.registerPlugin(useGSAP);
  const stepInc = -260;
  const iconInOutSpeed = 0.5;
  const iconOpacity = 0.1;

  useGSAP(() => {
    let tl = gsap
      .timeline({
        // paused: true,
        repeat: -1,
      })
      //   .set('#jobs', {
      //     x: -1560,
      //   })
      .set('#start-time-icon', {
        opacity: iconOpacity,
      })
      .set('#aws-icon', {
        opacity: iconOpacity,
      })
      .set('#neon-icon', {
        opacity: iconOpacity,
      })
      .set('#query-icon', {
        opacity: iconOpacity,
      })
      .set('#end-time-icon', {
        opacity: iconOpacity,
      })
      .set('#slack-icon', {
        opacity: iconOpacity,
      })
      .to('#jobs', {
        x: stepInc,
        duration: 1.2,
        ease: 'back.inOut',
      })
      .to('#start-time-icon', {
        opacity: 1,
      })
      .to('#start-time-spinner', {
        opacity: 0,
        duration: iconInOutSpeed,
        delay: 1.2,
        ease: 'back.in',
      })
      .to('#start-time-check', {
        opacity: 1,
        duration: iconInOutSpeed,
        delay: 0.2,
        scale: 1,
        ease: 'back.out',
      })
      .to('#start-time-icon', {
        opacity: iconOpacity,
      })
      .to('#jobs', {
        x: stepInc * 2,
        duration: 1.2,
        ease: 'back.inOut',
      })
      .to('#aws-icon', {
        opacity: 1,
      })
      .to('#neon-icon', {
        opacity: 1,
        delay: -0.5,
      })
      .to('#dump-spinner', { opacity: 0, duration: iconInOutSpeed, delay: 4, ease: 'back.in' })
      .to('#dump-check', {
        opacity: 1,
        duration: iconInOutSpeed,
        delay: 0.2,
        scale: 1,
        ease: 'back.out',
      })
      .to('#aws-icon', {
        opacity: iconOpacity,
      })
      .to('#neon-icon', {
        opacity: iconOpacity,
        delay: -0.5,
      })
      .to('#jobs', {
        x: stepInc * 3,
        duration: 1.2,
        ease: 'back.inOut',
      })
      .to('#query-icon', {
        opacity: 1,
      })
      .to('#query-spinner', { opacity: 0, duration: iconInOutSpeed, delay: 2.2, ease: 'back.in' })
      .to('#query-check', {
        opacity: 1,
        duration: iconInOutSpeed,
        delay: 0.2,
        scale: 1,
        ease: 'back.out',
      })
      .to('#query-icon', {
        opacity: iconOpacity,
      })
      .to('#jobs', {
        x: stepInc * 4,
        duration: 1.2,
        ease: 'back.inOut',
      })
      .to('#end-time-icon', {
        opacity: 1,
      })
      .to('#end-time-spinner', { opacity: 0, duration: iconInOutSpeed, delay: 1.2, ease: 'back.in' })
      .to('#end-time-check', {
        opacity: 1,
        duration: iconInOutSpeed,
        delay: 0.2,
        scale: 1,
        ease: 'back.out',
      })
      .to('#end-time-icon', {
        opacity: iconOpacity,
      })
      .to('#jobs', {
        x: stepInc * 5,
        duration: 1.2,
        ease: 'back.inOut',
      })
      .to('#slack-icon', {
        opacity: 1,
      })
      .to('#slack-spinner', {
        opacity: 0,
        duration: iconInOutSpeed,
        delay: 2.4,
        ease: 'back.in',
      })
      .to('#slack-check', {
        opacity: 1,
        duration: iconInOutSpeed,
        delay: 0.2,
        scale: 1,
        ease: 'back.out',
      })
      .to('#slack-icon', {
        opacity: iconOpacity,
      })
      .to('#jobs', {
        x: stepInc * 6,
        duration: 1.2,
        ease: 'back.inOut',
      })
      .to('#end-clock', {
        rotate: 360,
        repeat: 1,
        duration: 2,
        svgOrigin: '12 12',
        ease: 'linear',
      })
      .to('#jobs', {
        x: stepInc * 7,
        duration: 1,
        ease: 'back.inOut',
      });
  });

  return (
    <div className='relative w-full max-w-xl mx-auto'>
      <div className='absolute m-auto top-0 left-0 -bottom-0 right-0 xl:top-[10px] xl:-right-[330px] shadow-2xl shadow-black/70 w-64 h-56 origin-center z-10 xl:scale-125'>
        <div className='bg-brand-surface border border-brand-border rounded h-full'>
          <div className='flex flex-col gap-3 p-4'>
            <GitHubIcon className='h-8 w-8 text-white' />
            <div className='flex flex-col gap-0.5'>
              <strong className='block text-white leading-5'>create-neon-twin.yml</strong>
              <small className='text-brand-gray-200 text-xs'>on: '0 0 * * *'</small>
            </div>
          </div>
          <div className='relative h-10 overflow-hidden'>
            <div id='jobs' className='absolute top-0 left-4 flex gap-10 h-10'>
              <div className='absolute top-[19px] left-[20%] w-[70%] h-[1px] bg-brand-gray-400/40' />
              <ActionJobBlank />
              <ActionJob id='start-time' text='capture-start-time' time='1s' position='start' />
              <ActionJob id='dump' text='dump-and-restore' time='h1 1m' />
              <ActionJob id='query' text='db-query' time='4s' />
              <ActionJob id='end-time' text='capture-end-time' time='1s' />
              <ActionJob id='slack' text='post-to-slack-success' time='2s' />
              <ActionJob text='midnight ET' time='24h' className='!min-w-[160px]' position='end'>
                <ActionClock id='end' className='w-5 h-5' />
              </ActionJob>
            </div>
          </div>
          <div className='flex items-center justify-around text-white px-3 pt-6'>
            <IconContainer>
              <TimeIcon id='start-time-icon' className='w-5 h-5' />
            </IconContainer>
            <IconContainer>
              <AwsIcon className='w-5 h-5 mt-0.5' />
            </IconContainer>
            <IconContainer>
              <NeonIcon className='w-3.5 h-3.5' />
            </IconContainer>
            <IconContainer>
              <QueryIcon />
            </IconContainer>
            <IconContainer>
              <TimeIcon id='end-time-icon' className='w-5 h-5' />
            </IconContainer>
            <IconContainer>
              <SlackIcon />
            </IconContainer>
          </div>
        </div>
      </div>
      <ShikiHighlight
        className='text-[.7rem] pointer-events-none select-none h-64 xl:h-auto'
        isHero={true}
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
