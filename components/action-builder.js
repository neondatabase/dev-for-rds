import { useEffect } from 'react';
import Link from 'next/link';
import { useAtom } from 'jotai';
import { useRouter } from 'next/router';

import * as RadioGroup from '@radix-ui/react-radio-group';
import * as Tooltip from '@radix-ui/react-tooltip';

import NeonLogo from './neon-logo';
import TextInput from './text-input';
import RadioGroupInput from './radio-group-input';
import DropdownInput from './dropdown-input';
import ShikiHighlight from './shiki-highlight';
import UpIcon from './up-icon';
import InfoIcon from './info-icon';
import LinkIcon from './link-icon';
import ToggleSwitchLarge from './toggle-switch-large';
import ToggleSwitchSmall from './toggle-switch-small';

import {
  config,
  TWIN_DEFAULT,
  TWIN_QUERY,
  TWIN_WEBHOOK,
  TWIN_SSL,
  REVERSE_TWIN_SQL,
  REVERSE_TWIN_SQL_RESYNCHRONIZE,
  REVERSE_TWIN_PRISMA,
  REVERSE_TWIN_PRISMA_RESYNCHRONIZE,
} from '../const/code-config';

import { appState, hashId } from '../state';
// import { scrollToElement } from '../utils/scroll-to-element';
import { scrollToTop } from '../utils/scroll-to-top';
import StepChip from './step-chip';

const ActionBuilder = () => {
  const router = useRouter();
  const [state, setState] = useAtom(appState);

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
    updateSearchParams();
  }, [state]);

  const handleScrollToTop = () => {
    setState((prevState) => ({
      ...prevState,
      hash: '',
    }));

    scrollToTop();
  };

  const handleTwinWorkflowNameChange = (event) => {
    const {
      target: { value },
    } = event;

    setState((prevState) => ({
      ...prevState,
      twinWorkflowName: value,
      hash: hashId,
    }));
  };

  const handleReverseTwinWorkflowNameChange = (event) => {
    const {
      target: { value },
    } = event;

    setState((prevState) => ({
      ...prevState,
      reverseTwinWorkflowName: value,
      hash: hashId,
    }));
  };

  const handleTwinScheduleChange = (event) => {
    const {
      target: { value },
    } = event;

    setState((prevState) => ({
      ...prevState,
      twinSchedule: value,
      hash: hashId,
    }));
  };

  const handlePgVersionChange = (event) => {
    const {
      target: { innerText },
    } = event;

    setState((prevState) => ({
      ...prevState,
      pgVersion: innerText,
      hash: hashId,
    }));
  };

  const handleSSLNameChange = (event) => {
    const {
      target: { value },
    } = event;

    setState((prevState) => ({
      ...prevState,
      twinSSLName: value,
      hash: hashId,
    }));
  };

  const handleTwinJobChange = (value) => {
    setState((prevState) => ({
      ...prevState,
      twinJob: value,
      hash: hashId,
    }));
  };

  const handleTwinToggleChange = (event) => {
    const {
      target: { checked },
    } = event;

    setState((prevState) => ({
      ...prevState,
      twin: checked,
      hash: hashId,
    }));
  };

  const handleReverseTwinJobChange = (value) => {
    setState((prevState) => ({
      ...prevState,
      reverseTwinJob: value,
      reverseTwinSubJob: null,
      hash: hashId,
    }));
  };

  const handleReverseTwinSubJobChange = (event) => {
    const {
      target: { checked, id },
    } = event;

    setState((prevState) => ({
      ...prevState,
      reverseTwinSubJob: checked ? id : null,
      hash: hashId,
    }));
  };

  const handleReverseTwinToggleChange = (event) => {
    const {
      target: { checked },
    } = event;

    setState((prevState) => ({
      ...prevState,
      reverseTwin: checked,
      hash: hashId,
    }));
  };

  return (
    <div className='flex flex-col gap-16 lg:flex-row lg:gap-0 border border-brand-border rounded bg-brand-background'>
      <div>
        <div className='lg:sticky top-0 lg:w-[290px] lg:border-r lg:border-r-brand-border'>
          <div className='lg:h-screen lg:overflow-scroll scrollbar-none px-4 py-8'>
            <div className='flex flex-col gap-8'>
              <div className='flex items-center gap-2 group'>
                <NeonLogo showText={false} />

                <div className='flex items-center justify-between grow'>
                  <h2 className='m-0 mb-0.5 text-brand-gray-200 text-base font-normal select-none grow'>
                    / Twin Thing
                  </h2>
                  <button
                    className='flex items-center justify-center border border-brand-gray-500 text-white rounded p-2 transition-[opacity] duration-300 opacity-0 group-hover:opacity-100 focus:opacity-100'
                    onClick={handleScrollToTop}
                  >
                    <UpIcon className='w-3 h-3' />
                  </button>
                </div>
              </div>
              <div className='flex flex-col gap-8'>
                <div className='flex flex-col gap-2'>
                  <strong
                    className={`block uppercase transition-colors duration-300 text-base ${
                      state.twin ? 'text-brand-gray-200' : 'text-brand-gray-500'
                    }`}
                  >
                    <span
                      className={`transition-colors duration-300 ${
                        state.twin ? 'text-brand-checked' : 'text-brand-gray-500'
                      }`}
                    >
                      Twin
                    </span>{' '}
                    Workflow
                  </strong>
                  <ToggleSwitchLarge
                    id='twin'
                    className={`justify-between ${state.twin ? 'text-brand-gray-400' : 'text-brand-gray-500'}`}
                    label='RDS ► Neon'
                    defaultChecked={state.twin}
                    onChange={handleTwinToggleChange}
                  />
                </div>

                <TextInput
                  label='Name'
                  defaultValue={state.twinWorkflowName}
                  disabled={!state.twin}
                  onChange={handleTwinWorkflowNameChange}
                />
                <TextInput
                  label='Schedule'
                  defaultValue={state.twinSchedule}
                  disabled={!state.twin}
                  onChange={handleTwinScheduleChange}
                  icon={
                    <Tooltip.Provider>
                      <Tooltip.Root>
                        <Tooltip.Trigger asChild>
                          <button className='p-2 hover:text-white transition-colors duration-300'>
                            <InfoIcon className='w-5 h-5' />
                          </button>
                        </Tooltip.Trigger>
                        <Tooltip.Portal>
                          <Tooltip.Content
                            className='data-[state=delayed-open]:data-[side=top]:animate-slideDownAndFade data-[state=delayed-open]:data-[side=right]:animate-slideLeftAndFade data-[state=delayed-open]:data-[side=left]:animate-slideRightAndFade data-[state=delayed-open]:data-[side=bottom]:animate-slideUpAndFade select-none rounded bg-brand-gray-800 px-2 py-2 text-xs leading-none shadow will-change-[transform,opacity]'
                            sideOffset={5}
                          >
                            <Link
                              href='https://docs.github.com/en/actions/using-workflows/events-that-trigger-workflows#schedule'
                              target='_blank'
                              rel='noopener'
                              className='flex gap-1 text-white hover:text-brand-primary transition-colors duration-300'
                            >
                              <LinkIcon className='w-3 h-3' />
                              POSIX cron syntax
                            </Link>
                            <Tooltip.Arrow className='fill-brand-gray-800' />
                          </Tooltip.Content>
                        </Tooltip.Portal>
                      </Tooltip.Root>
                    </Tooltip.Provider>
                  }
                />
                <div className='flex flex-col gap-4'>
                  <DropdownInput
                    label='PostgreSQL Version'
                    value={state.pgVersion}
                    options={['14', '15', '16']}
                    disabled={!state.twin}
                    onSelect={handlePgVersionChange}
                  />
                </div>
                <RadioGroup.Root
                  value={state.twinJob}
                  onValueChange={handleTwinJobChange}
                  className='flex flex-col gap-4'
                >
                  <RadioGroupInput label='Default' value={TWIN_DEFAULT} disabled={!state.twin} />
                  <RadioGroupInput label='Database Query' value={TWIN_QUERY} disabled={!state.twin} />
                  <RadioGroupInput label='Slack Webhook' value={TWIN_WEBHOOK} disabled={!state.twin} />
                  <RadioGroupInput label='SSL Certificate' value={TWIN_SSL} disabled={!state.twin} />
                  {state.twinJob === TWIN_SSL ? (
                    <div className='ml-6'>
                      <TextInput label='File name' defaultValue={state.twinSSLName} onChange={handleSSLNameChange} />
                    </div>
                  ) : null}
                </RadioGroup.Root>
              </div>
              <hr className='mt-4 mb-0 border-brand-border' />
              <div className='flex flex-col gap-8 p-4'>
                <div className='flex flex-col gap-2'>
                  <strong
                    className={`block uppercase transition-colors duration-300 text-base ${
                      state.reverseTwin ? 'text-brand-gray-200' : 'text-brand-gray-500'
                    }`}
                  >
                    <span
                      className={`transition-colors duration-300 ${
                        state.reverseTwin ? 'text-brand-checked' : 'text-brand-gray-500'
                      }`}
                    >
                      Reverse Twin
                    </span>{' '}
                    Workflow
                  </strong>
                  <ToggleSwitchLarge
                    id='reverseTwin'
                    className={`justify-between ${state.reverseTwin ? 'text-brand-gray-400' : 'text-brand-gray-500'}`}
                    label='Neon ► RDS'
                    defaultChecked={state.reverseTwin}
                    onChange={handleReverseTwinToggleChange}
                  />
                </div>

                <TextInput
                  label='Name'
                  disabled={!state.reverseTwin}
                  defaultValue={state.reverseTwinWorkflowName}
                  onChange={handleReverseTwinWorkflowNameChange}
                />

                <div className='flex flex-col gap-4'>
                  <DropdownInput
                    label='PostgreSQL Version'
                    value={state.pgVersion}
                    options={['14', '15', '16']}
                    disabled={!state.reverseTwin}
                    onSelect={handlePgVersionChange}
                  />
                </div>

                <RadioGroup.Root
                  value={state.reverseTwinJob}
                  onValueChange={handleReverseTwinJobChange}
                  className='flex flex-col gap-4'
                >
                  <RadioGroupInput label='SQL' value={REVERSE_TWIN_SQL} disabled={!state.reverseTwin} />
                  {state.reverseTwinJob === REVERSE_TWIN_SQL ? (
                    <div className='ml-6'>
                      <ToggleSwitchSmall
                        id={REVERSE_TWIN_SQL_RESYNCHRONIZE}
                        className='justify-between'
                        label='Resynchronize'
                        disabled={!state.reverseTwin}
                        defaultChecked={state.reverseTwinSubJob === REVERSE_TWIN_SQL_RESYNCHRONIZE}
                        onChange={handleReverseTwinSubJobChange}
                      />
                    </div>
                  ) : null}
                  <RadioGroupInput label='Prisma' value={REVERSE_TWIN_PRISMA} disabled={!state.reverseTwin} />
                  {state.reverseTwinJob === REVERSE_TWIN_PRISMA ? (
                    <div className='ml-6'>
                      <ToggleSwitchSmall
                        id={REVERSE_TWIN_PRISMA_RESYNCHRONIZE}
                        className='justify-between'
                        label='Resynchronize'
                        disabled={!state.reverseTwin}
                        defaultChecked={state.reverseTwinSubJob === REVERSE_TWIN_PRISMA_RESYNCHRONIZE}
                        onChange={handleReverseTwinSubJobChange}
                      />
                    </div>
                  ) : null}
                </RadioGroup.Root>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div id='code' className='flex flex-col gap-6 px-4 py-8 overflow-scroll'>
        {state.twin ? (
          <div className='flex flex-col gap-8'>
            <div className='ml-0 sm:ml-16'>
              <h2>
                <span className='uppercase font-bold text-brand-checked'>Twin: </span>
                {config[state.twinJob].title}
              </h2>
              <p dangerouslySetInnerHTML={{ __html: config[state.twinJob].description }} className='!text-base' />
            </div>
            <div className='flex flex-col gap-16'>
              {config[state.twinJob].code.map((item, index) => {
                const { file, link, language, text } = item;
                return (
                  <div key={index} className='flex gap-2 sm:gap-6'>
                    <StepChip step={index + 1} />
                    <ShikiHighlight
                      file={file}
                      link={link}
                      language={language}
                      text={
                        typeof text === 'function'
                          ? text({
                              twinWorkflowName: state.twinWorkflowName,
                              twinSchedule: state.twinSchedule,
                              twinSSLName: state.twinSSLName,
                              pgVersion: state.pgVersion,
                            })
                          : text
                      }
                    />
                  </div>
                );
              })}
            </div>
          </div>
        ) : null}

        {state.twin && state.reverseTwin ? (
          <div className='ml-0 sm:ml-16'>
            <hr className='my-16 border-brand-border' />
          </div>
        ) : null}

        {state.reverseTwin ? (
          <div className='flex flex-col gap-8'>
            <div className='ml-0 sm:ml-16'>
              <h2>
                <span className='uppercase font-bold text-brand-checked'>Reverse Twin: </span>
                {config[state.reverseTwinJob].title}
              </h2>
              <p
                dangerouslySetInnerHTML={{ __html: config[state.reverseTwinJob].description }}
                className='!text-base'
              />
            </div>
            <div className='flex flex-col gap-16'>
              {config[state.reverseTwinSubJob === null ? state.reverseTwinJob : state.reverseTwinSubJob]?.code.map(
                (item, index) => {
                  const { file, link, language, text } = item;

                  return (
                    <div key={index} className='flex gap-2 sm:gap-6'>
                      <StepChip step={index + 1} />
                      <ShikiHighlight
                        file={file}
                        link={link}
                        language={language}
                        text={
                          typeof text === 'function'
                            ? text({
                                reverseTwinWorkflowName: state.reverseTwinWorkflowName,
                                pgVersion: state.pgVersion,
                              })
                            : text
                        }
                        className='w-full'
                      />
                    </div>
                  );
                }
              )}
            </div>
          </div>
        ) : null}

        <div>
          {!state.twin && !state.reverseTwin ? (
            <div className='ml-0 sm:ml-16'>
              <h2 className='uppercase'>
                <span className='font-bold text-brand-checked'>No workflow </span>
                selected
              </h2>
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
};

export default ActionBuilder;
