import { type Decorator } from '@storybook/react';
import { type StateSchema, StoreProvider } from 'app/providers/StoreProvider';
import { type ReducersMapObject } from '@reduxjs/toolkit';
import { loginReducer } from 'features/AuthByUsername/model/slice/loginSlice';

const defaultAsyncReducers: Partial<ReducersMapObject<StateSchema>> = {
	loginForm: loginReducer,
};

const StoreDecorator = (state: Partial<StateSchema>, asyncReducers?: Partial<ReducersMapObject<StateSchema>>): Decorator => (Story) => (
	<StoreProvider initialState={state} asyncReducers={{ ...defaultAsyncReducers, ...asyncReducers }}>
		<Story/>
	</StoreProvider>
);

export default StoreDecorator;