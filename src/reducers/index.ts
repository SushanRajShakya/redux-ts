import { combineReducers } from 'redux';
import { repoReducer } from './repoReducer';

const reducers = combineReducers({
  repos: repoReducer,
});

export type ReduxState = ReturnType<typeof reducers>;

export default reducers;
