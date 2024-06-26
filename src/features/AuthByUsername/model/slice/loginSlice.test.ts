import { LoginSchema } from '../types/LoginSchema';
import { loginActions, loginReducer } from './loginSlice';

describe('loginSlice.test', () => {
	test('test set username', () => {
		const state: Partial<LoginSchema> = { username: 'username' };
		expect(loginReducer(state as LoginSchema, loginActions.setUsername('username'))).toEqual({ username: 'username' });
	});

	test('test set password', () => {
		const state: Partial<LoginSchema> = { password: 'password' };
		expect(loginReducer(state as LoginSchema, loginActions.setPassword('password'))).toEqual({ password: 'password' });
	});
});