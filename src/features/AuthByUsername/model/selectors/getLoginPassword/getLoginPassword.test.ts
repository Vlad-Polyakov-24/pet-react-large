import { StateSchema } from 'app/providers/StoreProvider';
import getLoginPassword from './getLoginPassword';

describe('getLoginPassword.test', () => {
	test('should return password', () => {
		const state: Partial<StateSchema> = {
			loginForm: {
				username: '',
				password: 'password',
				isLoading: false,
			},
		};

		expect(getLoginPassword(state as StateSchema)).toEqual('password');
	});

	test('should work with empty state', () => {
		const state: Partial<StateSchema> = {};
		expect(getLoginPassword(state as StateSchema)).toEqual('');
	});
});