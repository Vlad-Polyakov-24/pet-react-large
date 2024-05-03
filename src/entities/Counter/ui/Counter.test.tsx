import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Counter from './Counter';
import ComponentRender from 'shared/config/tests/ComponentRender/ComponentRender';

describe('Counter', () => {
	test('test render', () => {
		ComponentRender(<Counter/>, {
			initialState: { counter: { value: 10 } },
		});
		expect(screen.getByTestId('counter-title')).toHaveTextContent('10');
	});

	test('decrement', async () => {
		const user = userEvent.setup();
		ComponentRender(<Counter />, {
			initialState: { counter: { value: 10 } },
		});
		await user.click(screen.getByTestId('counter-decrement-btn'));
		expect(screen.getByTestId('counter-title')).toHaveTextContent('counter: 9');
	});

	test('increment', async () => {
		const user = userEvent.setup();
		ComponentRender(<Counter />, {
			initialState: { counter: { value: 10 } },
		});
		await user.click(screen.getByTestId('counter-increment-btn'));
		expect(screen.getByTestId('counter-title')).toHaveTextContent('counter: 11');
	});
});