import { StateSchema } from 'app/providers/StoreProvider';
import getProfileError from './getProfileError';

describe('getProfileError.test', () => {
	test('should return error', () => {
		const state: Partial<StateSchema> = {
			profile: {
				isLoading: false,
				readonly: true,
				error: 'error',
			},
		};

		expect(getProfileError(state as StateSchema)).toEqual('error');
	});

	test('should work with empty state', () => {
		const state: Partial<StateSchema> = {};
		expect(getProfileError(state as StateSchema)).toEqual(undefined);
	});
});