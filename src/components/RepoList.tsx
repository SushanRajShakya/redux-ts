import { useState } from 'react';

import { useActions } from '../hooks';
import { useAppSelector } from '../hooks/useAppSelector';
import { ActionDispatcher, ReactSetState } from '../shared';

export const RepoList: React.FC = () => {
  const [term, setTerm] = useState<string>('');
  const { data, error, loading } = useAppSelector((state) => state.repos);

  const { searchRepos } = useActions();

  return (
    <div>
      <form onSubmit={_handleSave(searchRepos, term)}>
        <input value={term} onChange={_handleChange(setTerm)} />
        <button>Search</button>
      </form>
      {error && <h3>{error}</h3>}
      {loading && <h3>Loading !!!</h3>}
      {!error && (
        <ul>
          {data.map((item: string) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      )}
    </div>
  );
};

const _handleChange =
  (setTerm: ReactSetState<string>) =>
  (event: React.ChangeEvent<HTMLInputElement>): void => {
    setTerm(event.target.value);
  };

const _handleSave =
  (searchRepos: ActionDispatcher<string>, term: string) =>
  (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    searchRepos(term);
  };
