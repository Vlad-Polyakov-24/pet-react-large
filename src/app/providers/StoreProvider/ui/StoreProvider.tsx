import { type ReactNode } from 'react';
import { Provider } from 'react-redux';
import { type StateSchema } from '../config/StateSchema';
import createReduxStore from '../config/store';
import { type ReducersMapObject } from '@reduxjs/toolkit';

type StoreProviderProps = {
	children?: ReactNode;
	initialState?: Partial<StateSchema>;
	asyncReducers?: Partial<ReducersMapObject<StateSchema>>;
};

const StoreProvider = ({ children, initialState, asyncReducers }: StoreProviderProps) => {
	const store = createReduxStore(initialState as StateSchema, asyncReducers as ReducersMapObject<StateSchema>);

	return (
		<Provider store={store}>
			{children}
		</Provider>
	);
};

export default StoreProvider;
