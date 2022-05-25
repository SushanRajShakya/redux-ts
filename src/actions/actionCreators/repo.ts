import axios from 'axios';
import { Dispatch } from 'redux';

import { RepoAction } from '../repo';
import { RepoActionType } from '../actionTypes';
import { ERROR_SEARCH_REPO } from '../../constants';

export const searchRepos = (term: string) => {
  return async (dispatch: Dispatch<RepoAction>) => {
    dispatch({
      type: RepoActionType.SEARCH_REPOS,
    });

    try {
      const { data } = await axios.get(
        'https://registry.npmjs.org/-/v1/search',
        {
          params: {
            text: term,
          },
        }
      );

      const names = data.objects.map((result: any) => {
        return result.package.name;
      });

      setTimeout(() => {
        dispatch({
          type: RepoActionType.SEARCH_SUCCESS,
          payload: names,
        });
      }, 2000);
    } catch (err) {
      dispatch({
        type: RepoActionType.SEARCH_ERROR,
        payload: ERROR_SEARCH_REPO,
      });
    }
  };
};
