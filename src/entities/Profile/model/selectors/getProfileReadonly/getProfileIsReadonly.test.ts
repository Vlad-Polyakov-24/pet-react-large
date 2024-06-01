import { StateSchema } from 'app/providers/StoreProvider';
import getProfileIsReadonly from './getProfileIsReadonly';

describe('getProfileIsReadonly.test', () => {
	test('should return error', () => {
		const state: Partial<StateSchema> = {
			profile: {
				isLoading: false,
				readonly: true,
			},
		};

		expect(getProfileIsReadonly(state as StateSchema)).toEqual(true);
	});

	test('should work with empty state', () => {
		const state: Partial<StateSchema> = {};
		expect(getProfileIsReadonly(state as StateSchema)).toEqual(undefined);
	});
});