import { atom } from 'jotai';
export const hashId = 'github-action-builder';

export const appState = atom({
  workflowName: null,
  schedule: null,
  pgVersion: null,
  job: null,
  sslName: null,
  hash: '',
});
