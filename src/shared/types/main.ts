import { Dispatch } from 'redux';

import { RepoAction } from '../../actions';

export type Nullable<T> = T | null;

export type ReactSetState<T> = React.Dispatch<React.SetStateAction<T>>;

export type ActionDispatcher<T> = (
  value: T
) => (dispatch: Dispatch<RepoAction>) => Promise<void>;
