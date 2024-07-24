import { useState } from 'react';
import * as RadioGroup from '@radix-ui/react-radio-group';

import NeonLogo from './neon-logo';
import TextInput from './text-input';
import DropdownInput from './dropdown-input';
import ShikiHighlight from './shiki-highlight';

import {
  defaultEnv,
  defaultAction,
  queryAction,
  webhookNpm,
  webhookEnv,
  webhookAction,
  formatDate,
  slackSuccess,
  slackFailure,
  sslEnv,
  sslAction,
} from '../const/code-snippets';
import RadioGroupInput from './radio-group-input';

const WORKFLOW_NAME = 'Create Neon Twin';
const DEFAULT = 'default';
const QUERY = 'query';
const WEBHOOK = 'webhook';
const SSL = 'ssl';
const SSL_NAME = 'prod-us-east-1.pem';

const config = {
  [DEFAULT]: {
    title: 'Default',
    description: 'This default Action includes one job that runs a <code>pg_dump/restore</code>.',
    code: [
      {
        file: 'GitHub Secrets',
        language: 'shell',
        text: defaultEnv,
      },
      {
        file: '.github/workflows/create-neon-twin.yml',
        language: 'yml',
        text: (params) => defaultAction(params),
      },
    ],
  },
  [QUERY]: {
    title: 'With Database Query',
    description:
      'This is the same as default Action but adds a step to query the database and <code>echo</code> the prod database <code>pg_database_size</code> and <code>current_database</code>.',
    code: [
      {
        file: 'GitHub Secrets',
        language: 'shell',
        text: defaultEnv,
      },
      {
        file: '.github/workflows/create-neon-twin.yml',
        language: 'diff',
        text: (params) => queryAction(params),
      },
    ],
  },
  [WEBHOOK]: {
    title: 'With Slack Webhook',
    description:
      'TThis is the same as default Action but includes jobs that capture the start time, end time, a database query that outputs the prod database size and name, and JavaScript functions that post notifications to Slack for both <code>pg_dump/restore</code> success and failure scenarios.',
    code: [
      {
        file: '',
        language: 'shell',
        text: webhookNpm,
      },
      {
        file: 'GitHub Secrets',
        language: 'diff',
        text: webhookEnv,
      },
      {
        file: '.github/workflows/create-neon-twin.yml',
        language: 'diff',
        text: (params) => webhookAction(params),
      },

      {
        file: 'src/format-date.js',
        language: 'javascript',
        text: formatDate,
      },
      {
        file: 'src/slack-success.js',
        language: 'javascript',
        text: slackSuccess,
      },
      {
        file: 'src/slack-failure.js',
        language: 'javascript',
        text: slackFailure,
      },
    ],
  },
  [SSL]: {
    title: 'With SSL certificate',
    description:
      'This is the same as default Action but adds a step to decode an SSL certificate <code>base64</code> string.',
    code: [
      {
        file: 'GitHub Secrets',
        language: 'diff',
        text: sslEnv,
      },
      {
        file: '.github/workflows/create-neon-twin.yml',
        language: 'diff',
        text: (params) => sslAction(params),
      },
    ],
  },
};

const ActionBuilder = () => {
  const [state, setState] = useState({
    workflowName: WORKFLOW_NAME,
    schedule: '0 0 * * *',
    pgVersion: 16,
    job: DEFAULT,
    sslName: SSL_NAME,
  });

  const handleWorkflowNameChange = (event) => {
    const {
      target: { value },
    } = event;
    setState((prevState) => ({
      ...prevState,
      workflowName: value,
    }));
  };

  const handleScheduleChange = (event) => {
    const {
      target: { value },
    } = event;

    setState((prevState) => ({
      ...prevState,
      schedule: value,
    }));
  };

  const handlePgVersionChange = (event) => {
    const {
      target: { innerText },
    } = event;

    setState((prevState) => ({
      ...prevState,
      pgVersion: innerText,
    }));
  };

  const handleSSLName = (event) => {
    const {
      target: { value },
    } = event;

    setState((prevState) => ({
      ...prevState,
      sslName: value,
    }));
  };

  const onJobTypeChange = (value) => {
    setState((prevState) => ({
      ...prevState,
      job: value,
    }));
  };

  return (
    <div className='flex flex-col lg:flex-row bg-brand-background border-t border-t-brand-border'>
      <div>
        <div className='lg:sticky top-0 lg:w-72 bg-brand-background border-b border-b-brand-border lg:border-b-0'>
          <div className='lg:h-screen lg:overflow-scroll'>
            <div className='flex flex-col gap-8 py-8'>
              <div className='flex items-center gap-2 px-4 lg:px-6'>
                <NeonLogo showText={false} />
                <h2 className='m-0 mb-0.5 text-brand-gray-200 text-base font-normal'>/ Twin Thing</h2>
              </div>
              <div className='flex flex-col gap-8 px-4 lg:px-8'>
                <div className='flex flex-col gap-4'>
                  <strong className='uppercase text-brand-gray-400 text-lg'>workflow</strong>
                  <TextInput label='Name' defaultValue={state.workflowName} onChange={handleWorkflowNameChange} />
                  <TextInput label='Schedule' defaultValue={state.schedule} onChange={handleScheduleChange} />
                </div>
                <div className='flex flex-col gap-6'>
                  <div className='flex flex-col gap-4'>
                    <strong className='uppercase text-brand-gray-400 text-lg'>dump and restore</strong>
                    <DropdownInput
                      label='PostgreSQL Version'
                      value={state.pgVersion}
                      options={['14', '15', '16']}
                      onSelect={handlePgVersionChange}
                    />
                  </div>
                  <RadioGroup.Root
                    defaultValue='default'
                    onValueChange={onJobTypeChange}
                    className='flex flex-col gap-4'
                  >
                    <RadioGroupInput label='Default' value={DEFAULT} />
                    <RadioGroupInput label='Database Query' value={QUERY} />
                    <RadioGroupInput label='Slack Webhook' value={WEBHOOK} />
                    <RadioGroupInput label='SSL Certificate' value={SSL} />
                    {state.job === SSL ? (
                      <div className='ml-8'>
                        <TextInput label='File name' defaultValue={state.sslName} onChange={handleSSLName} />
                      </div>
                    ) : null}
                  </RadioGroup.Root>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='flex flex-col gap-6 border-t-0 lg:border-t-0 lg:border-l lg:border-l-brand-border px-4 py-8 lg:px-4 overflow-hidden max-w-7xl'>
        <div>
          <h2>{config[state.job].title}</h2>
          <p dangerouslySetInnerHTML={{ __html: config[state.job].description }} />
        </div>
        <div className='flex flex-col gap-16'>
          {Array.isArray(config[state.job].code)
            ? config[state.job].code.map((item, index) => {
                const { file, language, text } = item;
                return (
                  <ShikiHighlight
                    key={index}
                    file={file}
                    language={language}
                    text={
                      typeof text === 'function'
                        ? text({
                            workflowName: state.workflowName,
                            schedule: state.schedule,
                            sslName: state.sslName,
                            pgVersion: state.pgVersion,
                          })
                        : text
                    }
                  />
                );
              })
            : null}
        </div>
      </div>
    </div>
  );
};

export default ActionBuilder;
