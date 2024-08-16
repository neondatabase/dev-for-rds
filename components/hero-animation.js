import { useAtom } from 'jotai';
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
import DotIcon from './dot-icon';
import NeonIcon from './neon-icon';
import QueryIcon from './query-icon';
import SlackIcon from './slack-icon';

import { config, TWIN_DEFAULT } from '../const/code-config';
import { appState } from '../state';
import { getDate } from '../utils/get-date';

const HeroAnimation = () => {
  const { file, language, text } = config[TWIN_DEFAULT].code[1];

  const [state] = useAtom(appState);

  gsap.registerPlugin(useGSAP);

  const stepInc = -260;
  const iconInOutSpeed = 0.5;
  const dotSpeed = 1.8;
  const dotEnd = 170;
  const dotStart = -20;
  const dotEase = 'power1.out';

  useGSAP(() => {
    let tl = gsap
      .timeline({
        // paused: true,
        repeat: -1,
      })
      //   .set('#jobs', {
      //     x: -1560,
      //   })
      .set('#start-container', {
        scale: 0,
        opacity: 0,
      })
      .set('#start-text', {
        opacity: 0,
      })
      .add(() => {
        const id = 'start-text';
        const element = document.getElementById(id);
        element.innerHTML = `${getDate().date} @${getDate().time}`;
      })
      .set('#aws-container', {
        scale: 0,
        opacity: 0,
      })
      .set('#neon-container', {
        scale: 0,
        opacity: 0,
      })
      .set('#dot-line', {
        opacity: 0,
      })
      .set('#dot-a', {
        x: dotStart,
      })
      .set('#dot-b', {
        x: dotStart,
      })
      .set('#dot-c', {
        x: dotStart,
      })
      .set('#dot-d', {
        x: dotStart,
      })
      .set('#dot-e', {
        x: dotStart,
      })
      .set('#dot-f', {
        x: dotStart,
      })
      .set('#dot-g', {
        x: dotStart,
      })
      .set('#dot-h', {
        x: dotStart,
      })
      .set('#query-container', {
        scale: 0,
        opacity: 0,
      })
      .set('#query-text', {
        opacity: 0,
      })
      .set('#end-container', {
        scale: 0,
        opacity: 0,
      })
      .set('#end-text', {
        opacity: 0,
      })
      .set('#slack-container', {
        scale: 0,
        opacity: 0,
      })
      .set('#slack-text', {
        opacity: 0,
      })
      .add(() => {
        const id = 'end-text';
        const element = document.getElementById(id);
        element.innerHTML = `${getDate().date} @${getDate().time}`;
      })
      .to('#jobs', {
        x: stepInc,
        duration: 1.2,
        ease: 'back.inOut',
      })
      .to('#start-container', {
        scale: 1,
        opacity: 1,
        duration: iconInOutSpeed,
        ease: 'back.out',
      })
      .to('#start-text', {
        opacity: 1,
        duration: iconInOutSpeed,
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
      .to('#start-container', {
        opacity: 0,
        duration: iconInOutSpeed,
      })
      .to('#start-text', {
        opacity: 0,
        duration: iconInOutSpeed,
        delay: -iconInOutSpeed,
      })
      .to('#jobs', {
        x: stepInc * 2,
        duration: 1.2,
        ease: 'back.inOut',
      })
      .to('#aws-container', {
        scale: 1,
        opacity: 1,
        duration: iconInOutSpeed,
        ease: 'back.out',
      })
      .to('#neon-container', {
        scale: 1,
        opacity: 1,
        duration: iconInOutSpeed,
        ease: 'back.out',
      })
      .to('#dot-line', {
        opacity: 1,
        duration: iconInOutSpeed,
        ease: 'linear',
      })
      .to('#dot-a', {
        opacity: 1,
        x: dotEnd,
        duration: dotSpeed,
        ease: dotEase,
      })
      .to('#dot-b', {
        opacity: 1,
        x: dotEnd,
        duration: dotSpeed,
        ease: dotEase,
        delay: -dotSpeed / 2,
      })
      .to('#dot-c', {
        opacity: 1,
        x: dotEnd,
        duration: dotSpeed,
        ease: dotEase,
        delay: -dotSpeed / 2,
      })
      .to('#dot-d', {
        opacity: 1,
        x: dotEnd,
        duration: dotSpeed,
        ease: dotEase,
        delay: -dotSpeed / 2,
      })
      .to('#dot-e', {
        opacity: 1,
        x: dotEnd,
        duration: dotSpeed,
        ease: dotEase,
        delay: -dotSpeed / 2,
      })
      .to('#dot-f', {
        opacity: 1,
        x: dotEnd,
        duration: dotSpeed,
        ease: dotEase,
        delay: -dotSpeed / 2,
      })
      .to('#dot-g', {
        opacity: 1,
        x: dotEnd,
        duration: dotSpeed,
        ease: dotEase,
        delay: -dotSpeed / 2,
      })
      .to('#dot-h', {
        opacity: 1,
        x: dotEnd,
        duration: dotSpeed,
        ease: dotEase,
        delay: -dotSpeed / 2,
      })
      .to('#dump-spinner', { opacity: 0, duration: iconInOutSpeed, delay: -0.2, ease: 'back.in' })
      .to('#dump-check', {
        opacity: 1,
        duration: iconInOutSpeed,
        delay: 0.2,
        scale: 1,
        ease: 'back.out',
      })
      .to('#aws-container', {
        opacity: 0,
        duration: iconInOutSpeed,
        delay: -0.5,
      })
      .to('#neon-container', {
        opacity: 0,
        duration: iconInOutSpeed,
        delay: -0.5,
      })
      .to('#dot-line', {
        opacity: 0,
        duration: iconInOutSpeed,
        delay: -0.5,
      })
      .to('#jobs', {
        x: stepInc * 3,
        duration: 1.2,
        ease: 'back.inOut',
      })
      .to('#query-container', {
        scale: 1,
        opacity: 1,
        duration: iconInOutSpeed,
        ease: 'back.out',
      })
      .to('#query-text', {
        opacity: 1,
        duration: iconInOutSpeed,
      })
      .to('#query-spinner', { opacity: 0, duration: iconInOutSpeed, delay: 2.2, ease: 'back.in' })
      .to('#query-check', {
        opacity: 1,
        duration: iconInOutSpeed,
        delay: 0.2,
        scale: 1,
        ease: 'back.out',
      })
      .to('#query-container', {
        opacity: 0,
        duration: iconInOutSpeed,
      })
      .to('#query-text', {
        opacity: 0,
        duration: iconInOutSpeed,
        delay: -iconInOutSpeed,
      })
      .to('#jobs', {
        x: stepInc * 4,
        duration: 1.2,
        ease: 'back.inOut',
      })
      .to('#end-container', {
        scale: 1,
        opacity: 1,
        duration: iconInOutSpeed,
        ease: 'back.out',
      })
      .to('#end-text', {
        opacity: 1,
        duration: iconInOutSpeed,
      })
      .to('#end-time-spinner', { opacity: 0, duration: iconInOutSpeed, delay: 1.2, ease: 'back.in' })
      .to('#end-time-check', {
        opacity: 1,
        duration: iconInOutSpeed,
        delay: 0.2,
        scale: 1,
        ease: 'back.out',
      })
      .to('#end-container', {
        opacity: 0,
        duration: iconInOutSpeed,
      })
      .to('#end-text', {
        opacity: 0,
        duration: iconInOutSpeed,
        delay: -iconInOutSpeed,
      })
      .to('#jobs', {
        x: stepInc * 5,
        duration: 1.2,
        ease: 'back.inOut',
      })
      .to('#slack-container', {
        scale: 1,
        opacity: 1,
        duration: iconInOutSpeed,
        ease: 'back.out',
      })
      .to('#slack-text', {
        opacity: 1,
        duration: iconInOutSpeed,
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
      .to('#slack-container', {
        opacity: 0,
        duration: iconInOutSpeed,
      })
      .to('#slack-text', {
        opacity: 0,
        duration: iconInOutSpeed,
        delay: -iconInOutSpeed,
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

    // tl.progress(0.25);
  });

  return (
    <div className='relative w-full max-w-xl mx-auto'>
      <div className='absolute m-auto top-0 left-0 -bottom-0 right-0 xl:top-[10px] xl:-right-[330px] shadow-2xl shadow-black/70 w-64 h-[13.2rem] origin-center z-10 xl:scale-125'>
        <div className='bg-brand-surface border border-brand-border rounded h-full'>
          <div className='flex flex-col gap-3 p-4'>
            <GitHubIcon className='h-8 w-8 text-white' />
            <div className='flex flex-col gap-0.5'>
              <strong className='block text-white leading-5'>create-neon-twin.yml</strong>
              <small className='text-brand-gray-200 text-xs'>{`on: '${state.twinSchedule}'`}</small>
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
          <div className='relative flex items-center justify-between text-brand-gray-400 mx-4 h-[3.6rem]'>
            <div className='absolute items-center flex gap-1'>
              <IconContainer id='start-container'>
                <TimeIcon id='start-icon' />
              </IconContainer>
              <span id='start-text' className='text-[0.6rem] text-brand-gray-400' />
            </div>

            <div className='absolute flex items-center justify-between w-full'>
              <IconContainer id='aws-container'>
                <AwsIcon id='aws-icon' className='w-5 h-5 mt-0.5' />
              </IconContainer>

              <div className='flex items-center relative w-full h-6 overflow-hidden text-brand-gray-400'>
                <DotIcon id='dot-a' className='absolute w-4 h-4' />
                <DotIcon id='dot-b' className='absolute w-4 h-4' />
                <DotIcon id='dot-c' className='absolute w-4 h-4' />
                <DotIcon id='dot-d' className='absolute w-4 h-4' />
                <DotIcon id='dot-e' className='absolute w-4 h-4' />
                <DotIcon id='dot-f' className='absolute w-4 h-4' />
                <DotIcon id='dot-g' className='absolute w-4 h-4' />
                <DotIcon id='dot-h' className='absolute w-4 h-4' />
                <div id='dot-line' className='w-full h-[1px] bg-brand-gray-600' />
              </div>
              <IconContainer id='neon-container'>
                <NeonIcon id='neon-icon' className='w-3.5 h-3.5' />
              </IconContainer>
            </div>

            <div className='absolute items-center flex gap-1'>
              <IconContainer id='query-container'>
                <QueryIcon id='query-icon' className='w-3.5 h-3.5' />
              </IconContainer>
              <span id='query-text' className='text-[0.55rem] text-brand-gray-400'>
                {/* SELECT current_database(); */}
                SELECT pg_database_size(current_database());
              </span>
            </div>

            <div className='absolute items-center flex gap-1'>
              <IconContainer id='end-container'>
                <TimeIcon id='end-icon' />
              </IconContainer>
              <span id='end-text' className='text-[0.6rem] text-brand-gray-400' />
            </div>

            <div className='absolute items-center flex gap-1'>
              <IconContainer id='slack-container'>
                <SlackIcon id='slack-icon' className='w-3 h-3' />
              </IconContainer>
              <span id='slack-text' className='text-[0.6rem] text-brand-gray-400'>
                ☝️ A new Neon Twin is available!
              </span>
            </div>
          </div>
        </div>
      </div>
      <ShikiHighlight
        className='text-[.7rem] pointer-events-none select-none h-64 xl:h-auto'
        isHero={true}
        file={file}
        language={language}
        text={text({
          twinWorkflowName: state.twinWorkflowName,
          twinSchedule: state.twinSchedule,
          twinSSLName: state.twinSSLName,
          pgVersion: state.pgVersion,
        })}
      />
    </div>
  );
};

export default HeroAnimation;
