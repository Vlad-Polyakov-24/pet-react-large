import { configureStore, ReducersMapObject } from '@reduxjs/toolkit';
import type { NavigateOptions, To } from 'react-router-dom';
import { type StateSchema } from './StateSchema';
import { createReducerManager } from './reducerManager';
import { counterReducer } from 'entities/Counter';
import { userReducer } from 'entities/User';
import $api from 'shared/api/api';

const createReduxStore = (
	initialState?: StateSchema,
	asyncReducers?: ReducersMapObject<StateSchema>,
	navigate?: (to: To, Options?: NavigateOptions) => void
) => {
	const rootReducers: ReducersMapObject<StateSchema> = {
		...asyncReducers,
		counter: counterReducer,
		user: userReducer,
	};
	const reducerManager = createReducerManager(rootReducers);

	const store = configureStore<StateSchema>({
		reducer: reducerManager.reduce,
		devTools: __IS_DEV__,
		preloadedState: initialState,
		middleware: getDefaultMiddleware => getDefaultMiddleware({
			thunk: {
				extraArgument: {
					api: $api,
					navigate,
				},
			},
		}),
	});

	// @ts-ignore
	store.reducerManager = reducerManager;

	return store;
};

export type AppDispatch = ReturnType<typeof createReduxStore>['dispatch'];

export default createReduxStore;
