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
  migrationsEnv,
  migrationsResynchronizeEnv,
  sqlMigrationsDir,
  sqlMigrationsFile,
  sqlMigrationsAction,
  sqlMigrationsResynchronizeAction,
  prismaMigrationsDir,
  prismaMigrationsFile,
  prismaMigrationsAction,
  prismaMigrationsResynchronizeAction,
} from '../const/code-snippets';

export const TWIN_WORKFLOW_NAME = 'Create Neon Twin';
export const TWIN_SCHEDULE = '0 0 * * *';
export const TWIN_PG_VERSION = 16;
export const TWIN_SSL_NAME = 'prod-us-east-1.pem';

export const REVERSE_TWIN_WORKFLOW_NAME = 'Run Migrations';

export const TWIN_DEFAULT = 'default';
export const TWIN_QUERY = 'query';
export const TWIN_WEBHOOK = 'webhook';
export const TWIN_SSL = 'ssl';

export const REVERSE_TWIN_SQL = 'sql';
export const REVERSE_TWIN_SQL_RESYNCHRONIZE = 'sql-resynchronize';

export const REVERSE_TWIN_PRISMA = 'prisma';
export const REVERSE_TWIN_PRISMA_RESYNCHRONIZE = 'prisma-resynchronize';

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

const sqlMigrationsYml =
  'https://github.com/neondatabase/neon-twin-sql-migrations/blob/main/.github/workflows/migrate-to-prod-sql.yml';

const prismaMigrationsYml =
  'https://github.com/neondatabase/neon-twin-prisma-migrations/blob/main/.github/workflows/migrate-to-prod-prisma.yml';

export const config = {
  [TWIN_DEFAULT]: {
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
  [TWIN_QUERY]: {
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
  [TWIN_WEBHOOK]: {
    title: 'With Slack Webhook',
    description:
      'This is the same as default Action but includes jobs that capture the <code>start_time</code>, <code>end_time</code>, a database query that outputs the <code>database_size</code>, <code>database_name</code>, and JavaScript functions that post notifications to Slack for both <code>pg_dump/restore</code> success and failure scenarios.',
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
  [TWIN_SSL]: {
    title: 'With SSL certificate',
    description:
      'This is the same as default Action but adds a step to decode an TWIN_SSL certificate <code>base64</code> string.',
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
  [REVERSE_TWIN_SQL]: {
    title: 'With SQL migrations',
    description:
      'This actions runs on PR merge and reads <code>.sql</code> files from a migrations directory at the root of the repository.',
    code: [
      {
        file: 'Directory structure',
        language: 'yml',
        text: sqlMigrationsDir,
      },
      {
        file: '08-01-2024-add-flag-to-users.sql',
        language: 'sql',
        text: sqlMigrationsFile,
      },
      {
        file: 'GitHub Secrets',
        language: 'shell',
        text: migrationsEnv,
      },
      {
        file: '.github/workflows/migrate-to-prod-sql.yml',
        link: sqlMigrationsYml,
        language: 'yml',
        text: (params) => sqlMigrationsAction(params),
      },
    ],
  },
  [REVERSE_TWIN_SQL_RESYNCHRONIZE]: {
    code: [
      {
        file: 'Directory structure',
        language: 'yml',
        text: sqlMigrationsDir,
      },
      {
        file: '08-01-2024-add-flag-to-users.sql',
        language: 'sql',
        text: sqlMigrationsFile,
      },
      {
        file: 'GitHub Secrets',
        language: 'diff',
        text: migrationsResynchronizeEnv,
      },
      {
        file: '.github/workflows/migrate-to-prod-sql.yml',
        link: sqlMigrationsYml,
        language: 'diff',
        text: (params) => sqlMigrationsResynchronizeAction(params),
      },
    ],
  },
  [REVERSE_TWIN_PRISMA]: {
    title: 'With prisma migrate',
    description: 'This actions runs on PR merge and runs <code>prisma migrate deploy</code>.',
    code: [
      {
        file: 'Directory structure',
        language: 'yml',
        text: prismaMigrationsDir,
      },
      {
        file: 'prisma/schema.prisma',
        language: 'diff',
        text: prismaMigrationsFile,
      },
      {
        file: 'GitHub Secrets',
        language: 'shell',
        text: migrationsEnv,
      },
      {
        file: '.github/workflows/migrate-to-prod-prisma.yml',
        link: prismaMigrationsYml,
        language: 'yml',
        text: (params) => prismaMigrationsAction(params),
      },
    ],
  },
  [REVERSE_TWIN_PRISMA_RESYNCHRONIZE]: {
    code: [
      {
        file: 'Directory structure',
        language: 'yml',
        text: prismaMigrationsDir,
      },
      {
        file: 'prisma/schema.prisma',
        language: 'diff',
        text: prismaMigrationsFile,
      },
      {
        file: 'GitHub Secrets',
        language: 'diff',
        text: migrationsResynchronizeEnv,
      },
      {
        file: '.github/workflows/migrate-to-prod-prisma.yml',
        link: prismaMigrationsYml,
        language: 'diff',
        text: (params) => prismaMigrationsResynchronizeAction(params),
      },
    ],
  },
};
