import { StateSchema } from 'app/providers/StoreProvider';
import getLoginUsername from './getLoginUsername';

describe('getLoginUsername.test', () => {
	test('should return username', () => {
		const state: Partial<StateSchema> = {
			loginForm: {
				username: 'username',
				password: '',
				isLoading: false,
			},
		};

		expect(getLoginUsername(state as StateSchema)).toEqual('username');
	});

	test('should work with empty state', () => {
		const state: Partial<StateSchema> = {};
		expect(getLoginUsername(state as StateSchema)).toEqual('');
	});
});