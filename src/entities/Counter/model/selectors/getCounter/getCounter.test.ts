import { StateSchema } from 'app/providers/StoreProvider';
import getCounter from './getCounter';

describe('getCounter', () => {
	test('Should return counter value', () => {
		const state: StateSchema = {
			counter: { value: 10, },
		};
		expect(getCounter(state)).toEqual({ value: 10 });
	});
});