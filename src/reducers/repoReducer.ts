import { Nullable } from '../shared';
import { RepoAction, RepoActionType } from '../actions';

interface RepoState {
  loading: boolean;
  error: Nullable<string>;
  data: string[];
}

const initialState = {
  loading: false,
  error: null,
  data: [],
};

export const repoReducer = (
  state: RepoState = initialState,
  action: RepoAction
): RepoState => {
  switch (action.type) {
    case RepoActionType.SEARCH_REPOS:
      return { loading: true, error: null, data: [] };
    case RepoActionType.SEARCH_SUCCESS:
      return { loading: false, error: null, data: action.payload };
    case RepoActionType.SEARCH_ERROR:
      return { loading: false, error: action.payload, data: [] };
    default:
      return state;
  }
};
