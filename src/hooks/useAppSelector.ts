import { TypedUseSelectorHook, useSelector } from 'react-redux';

import { ReduxState } from '../reducers';

export const useAppSelector: TypedUseSelectorHook<ReduxState> = useSelector;
