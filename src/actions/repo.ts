import { RepoActionType } from './actionTypes';

export interface SearchRepoAction {
  type: RepoActionType.SEARCH_REPOS;
}

export interface SearchSuccessAction {
  type: RepoActionType.SEARCH_SUCCESS;
  payload: string[];
}

export interface SearchErrorAction {
  type: RepoActionType.SEARCH_ERROR;
  payload: string;
}

export type RepoAction =
  | SearchErrorAction
  | SearchRepoAction
  | SearchSuccessAction;
