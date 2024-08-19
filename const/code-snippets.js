export const defaultEnv = `PROD_DATABASE_URL=
DEV_DATABASE_URL=
`;

export const defaultAction = ({ twinWorkflowName, twinSchedule, pgVersion }) => `name: ${twinWorkflowName}

on:
  schedule:
   - cron: '${twinSchedule}'
  workflow_dispatch:

env:
  PROD_DATABASE_URL: \${{ secrets.PROD_DATABASE_URL }}
  DEV_DATABASE_URL: \${{ secrets.DEV_DATABASE_URL }}
  PG_VERSION: '${pgVersion}'

jobs:
  dump-and-restore:
    runs-on: ubuntu-latest

    steps:
      - name: Install PostgreSQL
        run: |
          sudo apt update
          yes '' | sudo /usr/share/postgresql-common/pgdg/apt.postgresql.org.sh
          sudo apt install -y postgresql-\${{ env.PG_VERSION }}

      - name: Dump from RDS and Restore to Neon
        run: |
          /usr/lib/postgresql/\${{ env.PG_VERSION }}/bin/pg_dump "\${{ env.PROD_DATABASE_URL }}" -Fc -f "\${{ github.workspace }}/prod-dump-file.dump"
          /usr/lib/postgresql/\${{ env.PG_VERSION }}/bin/pg_restore -d "\${{ env.DEV_DATABASE_URL }}" --clean --no-owner --no-acl --if-exists "\${{ github.workspace }}/prod-dump-file.dump"
`;

export const queryAction = ({ twinWorkflowName, twinSchedule, pgVersion }) => `name: ${twinWorkflowName}

on:
  schedule:
   - cron: '${twinSchedule}'
  workflow_dispatch:

env:
  PROD_DATABASE_URL: \${{ secrets.PROD_DATABASE_URL }}
  DEV_DATABASE_URL: \${{ secrets.DEV_DATABASE_URL }}
  PG_VERSION: '${pgVersion}'

jobs:
  dump-and-restore:
    runs-on: ubuntu-latest

    steps:
      - name: Install PostgreSQL
        run: |
          sudo apt update
          yes '' | sudo /usr/share/postgresql-common/pgdg/apt.postgresql.org.sh
          sudo apt install -y postgresql-\${{ env.PG_VERSION }}

      - name: Dump from RDS and Restore to Neon
        run: |
          /usr/lib/postgresql/\${{ env.PG_VERSION }}/bin/pg_dump "\${{ env.PROD_DATABASE_URL }}" -Fc -f "\${{ github.workspace }}/prod-dump-file.dump"
          /usr/lib/postgresql/\${{ env.PG_VERSION }}/bin/pg_restore -d "\${{ env.DEV_DATABASE_URL }}" --clean --no-owner --no-acl --if-exists "\${{ github.workspace }}/prod-dump-file.dump"

+  db-query:
+    runs-on: ubuntu-latest
+    needs:
+      - dump-and-restore

+    steps:
+      - name: Install PostgreSQL
+        run: |
+          sudo apt update
+          yes '' | sudo /usr/share/postgresql-common/pgdg/apt.postgresql.org.sh
+          sudo apt install -y postgresql-\${{ env.PG_VERSION }}

+      - name: Database Query
+        run: |
+          echo "database_size=$(/usr/lib/postgresql/\${{ env.PG_VERSION }}/bin/psql "\${{ env.PROD_DATABASE_URL }}" -t -c "SELECT pg_database_size(current_database());")"
+          echo "database_name=$(/usr/lib/postgresql/\${{ env.PG_VERSION }}/bin/psql "\${{ env.PROD_DATABASE_URL }}" -t -c "SELECT current_database();")"
`;

export const webhookNpm = `npm install dotenv
`;
export const webhookEnv = `PROD_DATABASE_URL=
DEV_DATABASE_URL=
+ SLACK_WEBHOOK_URL=
`;

export const webhookAction = ({ twinWorkflowName, twinSchedule, pgVersion }) => `name: ${twinWorkflowName}

on:
  schedule:
   - cron: '${twinSchedule}'
  workflow_dispatch:

env:
  PROD_DATABASE_URL: \${{ secrets.PROD_DATABASE_URL }} # Production or primary database
  DEV_DATABASE_URL: \${{ secrets.DEV_DATABASE_URL }} # Development database
  PG_VERSION: '${pgVersion}'
+  SLACK_WEBHOOK_URL: \${{ secrets.SLACK_WEBHOOK_URL }}
+  NODE_VERSION: '20.x'

jobs:
+  capture-start-time:
+    runs-on: ubuntu-latest

+    steps:
+      - name: Capture start time
+        id: capture-start-time
+        run: |
+          echo "start_time=$(date --utc +"%Y-%m-%dT%H:%M:%SZ")" >> $GITHUB_OUTPUT

+    outputs:
+      start_time: \${{ steps.capture-start-time.outputs.start_time }}

  dump-and-restore:
    runs-on: ubuntu-latest
+    needs:
+      - 'capture-start-time'

    steps:
      - name: Install PostgreSQL
        run: |
          sudo apt update
          yes '' | sudo /usr/share/postgresql-common/pgdg/apt.postgresql.org.sh
          sudo apt install -y postgresql-\${{ env.PG_VERSION }}

      - name: Dump from RDS and Restore to Neon
        run: |
          /usr/lib/postgresql/\${{ env.PG_VERSION }}/bin/pg_dump "\${{ env.PROD_DATABASE_URL }}" -Fc -f "\${{ github.workspace }}/prod-dump-file.dump"
          /usr/lib/postgresql/\${{ env.PG_VERSION }}/bin/pg_restore -d "\${{ env.DEV_DATABASE_URL }}" --clean --no-owner --no-acl --if-exists "\${{ github.workspace }}/prod-dump-file.dump"

+  db-query:
+    runs-on: ubuntu-latest
+    needs:
+      - dump-and-restore

+    steps:
+      - name: Install PostgreSQL
+        run: |
+          sudo apt update
+         yes '' | sudo /usr/share/postgresql-common/pgdg/apt.postgresql.org.sh
+          sudo apt install -y postgresql-\${{ env.PG_VERSION }}

+      - name: Database Query
+        id: db-query
+        run: |
+          echo "database_size=$(/usr/lib/postgresql/\${{ env.PG_VERSION }}/bin/psql "\${{ env.PROD_DATABASE_URL }}" -t -c "SELECT pg_database_size(current_database());")" >> $GITHUB_OUTPUT
+          echo "database_name=$(/usr/lib/postgresql/\${{ env.PG_VERSION }}/bin/psql "\${{ env.PROD_DATABASE_URL }}" -t -c "SELECT current_database();")" >> $GITHUB_OUTPUT

+    outputs:
+      database_size: \${{ steps.db-query.outputs.database_size }}
+      database_name: \${{ steps.db-query.outputs.database_name }}

+  capture-end-time:
+    runs-on: ubuntu-latest
+    needs:
+      - db-query

+    steps:
+      - name: Capture end time
+        id: capture-end-time
+        run: |
+         echo "end_time=$(date --utc +"%Y-%m-%dT%H:%M:%SZ")" >> $GITHUB_OUTPUT

+    outputs:
+      end_time: \${{ steps.capture-end-time.outputs.end_time }}

+  post-to-slack-success:
+    runs-on: ubuntu-latest
+   needs:
+      - capture-start-time
+      - db-query
+      - capture-end-time
+    if: \${{ success() }}

+    env:
+      DATABASE_SIZE: \${{ needs.db-query.outputs.database_size }}
+      DATABASE_NAME: \${{ needs.db-query.outputs.database_name }}
+      JOB_START_TIME: \${{ needs.capture-start-time.outputs.start_time }}
+      JOB_END_TIME: \${{ needs.capture-end-time.outputs.end_time }}

+    steps:
+      - name: Checkout repository
+        uses: actions/checkout@v4

+      - name: Install dependencies
+        run: npm ci

+      - name: Run Success script
+        run: |
+          node src/slack-success.js

+  post-to-slack-failure:
+    runs-on: ubuntu-latest
+    needs:
+      - dump-and-restore
+    if: \${{ failure() }}

+    steps:
+      - name: Checkout repository
+        uses: actions/checkout@v4

+      - name: Install dependencies
+        run: npm ci

+      - name: Run Failure script
+        run: |
+          node src/slack-failure.js
`;

export const formatDate = `const formatDate = (dateString) => {
  const date = new Date(dateString).toLocaleString('en-US', {
    day: 'numeric',
    month: 'long',
    weekday: 'long',
    year: 'numeric',
  });

  const time = new Date(dateString).toLocaleTimeString('en-US', {
    hour12: true,
    hour: 'numeric',
    minute: 'numeric',
  });

  return {
    date,
    time,
  };
};

export default formatDate;
`;

export const slackSuccess = `import dotenv from 'dotenv';
dotenv.config();

import formatDate from './format-date.js';

const init = async () => {
  const bytes = parseInt(process.env.DATABASE_SIZE, 10) || 0;
  const gigabytes = (bytes / (1024 * 1024 * 1024)).toFixed(2);
  const name = process.env.DATABASE_NAME || 'undefined';
  const start = new Date(process.env.JOB_START_TIME) || new Date();
  const end = new Date(process.env.JOB_END_TIME) || new Date();
  const duration = end - start;
  const hours = Math.floor(duration / (1000 * 60 * 60));
  const minutes = Math.floor((duration % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((duration % (1000 * 60)) / 1000);

  try {
    fetch(process.env.SLACK_WEBHOOK_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        blocks: [
          {
            type: 'header',
            text: {
              type: 'plain_text',
              text: '☝️ A new Neon Twin is available!',
              emoji: true,
            },
          },
          {
            type: 'divider',
          },
          {
            type: 'section',
            text: {
              type: 'plain_text',
              text: \`Created: \${formatDate(start).date}\`,
            },
          },
          {
            type: 'context',
            elements: [
              {
                type: 'mrkdwn',
                text: \`• Size: \${gigabytes} GB\\n• Name: \${name}\\n• Start: \${formatDate(start).time}\\n• End: \${formatDate(end).time}\\n• Duration: \${hours} hours, \${minutes} minutes, \${seconds} seconds\\n\`,
              },
            ],
          },
        ],
      }),
    });
  } catch (error) {
    console.error(error);
  }
};

init();
`;

export const slackFailure = `import dotenv from 'dotenv';
dotenv.config();

import formatDate from './format-date.js';

const init = async () => {
  try {
    fetch(process.env.SLACK_WEBHOOK_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        blocks: [
          {
            type: 'header',
            text: {
              type: 'plain_text',
              text: '🚨 A Neon Twin failed',
              emoji: true,
            },
          },
          {
            type: 'divider',
          },
          {
            type: 'section',
            text: {
              type: 'plain_text',
              text: \`Failed: \${formatDate(new Date()).date}\`,
            },
          },
        ],
      }),
    });
  } catch (error) {
    console.error(error);
  }
};

init();
`;

export const sslEnv = ({ twinSSLName }) => `- PROD_DATABASE_URL=
+ PROD_DATABASE_URL= ... ?sslrootcert=/${twinSSLName}
DEV_DATABASE_URL=
+ SSL_CERT_BASE64=
`;

export const sslAction = ({ twinWorkflowName, twinSchedule, twinSSLName, pgVersion }) => `name: ${twinWorkflowName}

on:
  schedule:
   - cron: '${twinSchedule}'
  workflow_dispatch:

env:
  PROD_DATABASE_URL: \${{ secrets.PROD_DATABASE_URL }}
  DEV_DATABASE_URL: \${{ secrets.DEV_DATABASE_URL }}
+  SSL_CERT_BASE64: \${{ secrets.SSL_CERT_BASE64 }}
  PG_VERSION: '${pgVersion}'

jobs:
  dump-and-restore:
    runs-on: ubuntu-latest

    steps:
+      - name: Decode TWIN_SSL Cert
+        run: |
+          echo "\${{ secrets.SSL_CERT_BASE64 }}" | base64 --decode > ${twinSSLName}

      - name: Install PostgreSQL
        run: |
          sudo apt update
          yes '' | sudo /usr/share/postgresql-common/pgdg/apt.postgresql.org.sh
          sudo apt install -y postgresql-\${{ env.PG_VERSION }}

      - name: Dump from RDS and Restore to Neon
        run: |
          /usr/lib/postgresql/\${{ env.PG_VERSION }}/bin/pg_dump "\${{ env.PROD_DATABASE_URL }}" -Fc -f "\${{ github.workspace }}/prod-dump-file.dump"
          /usr/lib/postgresql/\${{ env.PG_VERSION }}/bin/pg_restore -d "\${{ env.DEV_DATABASE_URL }}" --clean --no-owner --no-acl --if-exists "\${{ github.workspace }}/prod-dump-file.dump"
`;

export const migrationsEnv = `PROD_DATABASE_URL=`;

export const sqlMigrationsDir = () => `├── migrations
│   ├── 2024
│   │   ├── 08
│   │   │   ├── 08-01-2024-add-flag-to-users.sql
`;

export const sqlMigrationsFile = () => `BEGIN;

ALTER TABLE users
ADD COLUMN flag VARCHAR(255);

COMMIT;
`;

export const sqlMigrationsAction = ({ reverseTwinWorkflowName, pgVersion }) => `name: ${reverseTwinWorkflowName}

on:
  pull_request:
    types: [closed]
    branches:
      - main

env:
  PROD_DATABASE_URL: \${{ secrets.PROD_DATABASE_URL }} # Production or primary database
  PG_VERSION: '${pgVersion}'

jobs:
  pr-merged:
    runs-on: ubuntu-latest
    if: github.event.pull_request.merged == true # Ensure the PR was merged

    steps:
      - name: Install PostgreSQL
        run: |
          sudo apt update
          yes '' | sudo /usr/share/postgresql-common/pgdg/apt.postgresql.org.sh
          sudo apt install -y postgresql-\${{ env.PG_VERSION }}

      - name: Checkout repository
        uses: actions/checkout@v4
        with:
          fetch-depth: 0

      - name: Get changed files
        run: |
          git diff --name-only -r HEAD^1 HEAD > migration_files.txt
          echo "Changed files:"
          cat migration_files.txt

      - name: Apply migrations
        run: |
          while IFS= read -r file; do
            if [ ! -f "$file" ]; then
              echo "$file does not exist"
              continue
            fi

            if [[ "$file" != *.sql ]]; then
              echo "$file is not a SQL file"
              continue
            fi

            echo "Processing $file"
            if ! /usr/lib/postgresql/\${{ env.PG_VERSION }}/bin/psql "\${{ env.PROD_DATABASE_URL }}" < "$file"; then
              echo "Error applying $file"
              exit 1
            fi
          done < migration_files.txt
`;

export const sqlMigrationsResynchronizeAction = ({
  reverseTwinWorkflowName,
  pgVersion,
}) => `name: ${reverseTwinWorkflowName}

on:
  pull_request:
    types: [closed]
    branches:
      - main

env:
  PROD_DATABASE_URL: \${{ secrets.PROD_DATABASE_URL }} # Production or primary database
+  DEV_DATABASE_URL: \${{ secrets.DEV_DATABASE_URL }} # Development database  
  PG_VERSION: '${pgVersion}'

jobs:
  pr-merged:
    runs-on: ubuntu-latest
    if: github.event.pull_request.merged == true # Ensure the PR was merged

    steps:
      - name: Install PostgreSQL
        run: |
          sudo apt update
          yes '' | sudo /usr/share/postgresql-common/pgdg/apt.postgresql.org.sh
          sudo apt install -y postgresql-\${{ env.PG_VERSION }}

      - name: Checkout repository
        uses: actions/checkout@v4
        with:
          fetch-depth: 0

      - name: Get changed files
        run: |
          git diff --name-only -r HEAD^1 HEAD > migration_files.txt
          echo "Changed files:"
          cat migration_files.txt

      - name: Apply migrations
        run: |
          while IFS= read -r file; do
            if [ ! -f "$file" ]; then
              echo "$file does not exist"
              continue
            fi

            if [[ "$file" != *.sql ]]; then
              echo "$file is not a SQL file"
              continue
            fi

            echo "Processing $file"
            if ! /usr/lib/postgresql/\${{ env.PG_VERSION }}/bin/psql "\${{ env.PROD_DATABASE_URL }}" < "$file"; then
              echo "Error applying $file"
              exit 1
            fi
          done < migration_files.txt

+  dump-and-restore:
+    runs-on: ubuntu-latest
+    steps:
+      - name: Install PostgreSQL
+        run: |
+          sudo apt update
+          yes '' | sudo /usr/share/postgresql-common/pgdg/apt.postgresql.org.sh
+          sudo apt install -y postgresql-\${{ env.PG_VERSION }}
+      - name: Dump from RDS and Restore to Neon
+        run: |
+          /usr/lib/postgresql/\${{ env.PG_VERSION }}/bin/pg_dump "\${{ env.PROD_DATABASE_URL }}" -Fc -f "\${{ github.workspace }}/prod-dump-file.dump"
+          /usr/lib/postgresql/\${{ env.PG_VERSION }}/bin/pg_restore -d "\${{ env.DEV_DATABASE_URL }}" --clean --no-owner --no-acl --if-exists "\${{ github.workspace }}/prod-dump-file.dump"
`;

export const prismaMigrationsDir = () => `├── prisma
│   ├── migrations
│   │   ├── 20240802104019_alter_flag_varchar
│   │   │   ├── migration.sql
│   ├── schema.prisma
`;

export const prismaMigrationsFile = () => `...
model users {
  id         Int     @id @default(autoincrement())
  first_name String  @db.VarChar(255)
  last_name  String  @db.VarChar(255)
  email      String  @unique @db.VarChar(255)
  country    String  @db.VarChar(255)
-  flag       String? @db.VarChar(255) 
+  flag       String? @db.VarChar(55) 
}
`;

export const prismaMigrationsAction = ({ reverseTwinWorkflowName, pgVersion }) => `name: ${reverseTwinWorkflowName}

on:
  pull_request:
    types: [closed]
    branches:
      - main

env:
  PROD_DATABASE_URL: \${{ secrets.PROD_DATABASE_URL }} # Production or primary database
  PG_VERSION: '${pgVersion}'

jobs:
  pr-merged:
    runs-on: ubuntu-latest
    if: github.event.pull_request.merged == true # Ensure the PR was merged

    steps:
      - name: Checkout repository
        uses: actions/checkout@v4

      - name: Run Prisma Migrate
        run: |
          npx prisma migrate deploy`;

export const prismaMigrationsResynchronizeAction = ({
  reverseTwinWorkflowName,
  pgVersion,
}) => `name: ${reverseTwinWorkflowName}

on:
  pull_request:
    types: [closed]
    branches:
      - main

env:
  PROD_DATABASE_URL: \${{ secrets.PROD_DATABASE_URL }} # Production or primary database
+  DEV_DATABASE_URL: \${{ secrets.DEV_DATABASE_URL }} # Development database  
  PG_VERSION: '${pgVersion}'

jobs:
  pr-merged:
    runs-on: ubuntu-latest
    if: github.event.pull_request.merged == true # Ensure the PR was merged

    steps:
      - name: Checkout repository
        uses: actions/checkout@v4

      - name: Run Prisma Migrate
        run: |
          npx prisma migrate deploy
          
+  dump-and-restore:
+    runs-on: ubuntu-latest
+    steps:
+      - name: Install PostgreSQL
+        run: |
+          sudo apt update
+          yes '' | sudo /usr/share/postgresql-common/pgdg/apt.postgresql.org.sh
+          sudo apt install -y postgresql-\${{ env.PG_VERSION }}
+      - name: Dump from RDS and Restore to Neon
+        run: |
+          /usr/lib/postgresql/\${{ env.PG_VERSION }}/bin/pg_dump "\${{ env.PROD_DATABASE_URL }}" -Fc -f "\${{ github.workspace }}/prod-dump-file.dump"
+          /usr/lib/postgresql/\${{ env.PG_VERSION }}/bin/pg_restore -d "\${{ env.DEV_DATABASE_URL }}" --clean --no-owner --no-acl --if-exists "\${{ github.workspace }}/prod-dump-file.dump"
`;
