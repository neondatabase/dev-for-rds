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

export const WORKFLOW_NAME = 'Create Neon Twin';
export const SCHEDULE = '0 0 * * *';
export const PG_VERSION = 16;
export const DEFAULT = 'default';
export const QUERY = 'query';
export const WEBHOOK = 'webhook';
export const SSL = 'ssl';
export const SSL_NAME = 'prod-us-east-1.pem';

const defaultActionYml =
  'https://github.com/neondatabase/rds-to-neon-twin/blob/main/.github/workflows/create-neon-twin-default.yml';

const queryActionYml =
  'https://github.com/neondatabase/rds-to-neon-twin/blob/main/.github/workflows/create-twin-query.yml';

const webhookActionYml =
  'https://github.com/neondatabase/rds-to-neon-twin/blob/main/.github/workflows/create-neon-twin-slack.yml';
const webhookDateJs = 'https://github.com/neondatabase/rds-to-neon-twin/blob/main/src/format-date.js';
const webhookSuccessJs = 'https://github.com/neondatabase/rds-to-neon-twin/blob/main/src/slack-success.js';
const webhookFailureJs = 'https://github.com/neondatabase/rds-to-neon-twin/blob/main/src/slack-failure.js';

const sslActionYml =
  'https://github.com/neondatabase/rds-to-neon-twin/blob/main/.github/workflows/create-neon-twin-ssl.yml';

export const config = {
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
        link: defaultActionYml,
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
        link: queryActionYml,
        language: 'diff',
        text: (params) => queryAction(params),
      },
    ],
  },
  [WEBHOOK]: {
    title: 'With Slack Webhook',
    description:
      'This is the same as default Action but includes jobs that capture the start time, end time, a database query that outputs the prod database size and name, and JavaScript functions that post notifications to Slack for both <code>pg_dump/restore</code> success and failure scenarios.',
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
        link: webhookActionYml,
        language: 'diff',
        text: (params) => webhookAction(params),
      },

      {
        file: 'src/format-date.js',
        link: webhookDateJs,
        language: 'javascript',
        text: formatDate,
      },
      {
        file: 'src/slack-success.js',
        link: webhookSuccessJs,
        language: 'javascript',
        text: slackSuccess,
      },
      {
        file: 'src/slack-failure.js',
        link: webhookFailureJs,
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
        link: sslActionYml,
        language: 'diff',
        text: (params) => sslAction(params),
      },
    ],
  },
};
