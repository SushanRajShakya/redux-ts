import { Provider } from 'react-redux';
import ReactDOM from 'react-dom/client';

import { store } from './store';
import { RepoList } from './components';

const App: React.FC = () => {
  return (
    <div>
      <h1>Search for a package</h1>
      <RepoList />
    </div>
  );
};

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
