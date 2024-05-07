import { type Decorator } from '@storybook/react';
import { type StateSchema, StoreProvider } from 'app/providers/StoreProvider';

const StoreDecorator = (state: Partial<StateSchema>): Decorator => (Story) => (
	<StoreProvider initialState={state}>
		<Story/>
	</StoreProvider>
);

export default StoreDecorator;