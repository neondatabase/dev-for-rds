import { atom } from 'jotai';
export const hashId = 'github-action-builder';

export const appState = atom({
  twin: null,
  twinWorkflowName: null,
  twinSchedule: null,
  twinJob: null,
  twinSSLName: null,
  reverseTwin: null,
  reverseTwinWorkflowName: null,
  reverseTwinJob: null,
  reverseTwinSubJob: null,
  pgVersion: null,
  hash: '',
});
