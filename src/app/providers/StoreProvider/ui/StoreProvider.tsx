import { type ReactNode } from 'react';
import { type StateSchema } from '../config/StateSchema';
import createReduxStore from '../config/store';
import { Provider } from 'react-redux';

type StoreProviderProps = {
	children?: ReactNode;
	initialState?: StateSchema;
};

const StoreProvider = ({ children, initialState }: StoreProviderProps) => {
	const store = createReduxStore(initialState);

	return (
		<Provider store={store}>
			{children}
		</Provider>
	);
};

export default StoreProvider;
