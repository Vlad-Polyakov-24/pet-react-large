import { StateSchema } from 'app/providers/StoreProvider';
import getProfileIsLoading from './getProfileIsLoading';

describe('getProfileData.test', () => {
	test('should work with filled state', () => {
		const state: Partial<StateSchema> = {
			profile: {
				isLoading: true,
				readonly: true,
			},
		};

		expect(getProfileIsLoading(state as StateSchema)).toEqual(true);
	});

	test('should work with empty state', () => {
		const state: Partial<StateSchema> = {};
		expect(getProfileIsLoading(state as StateSchema)).toEqual(undefined);
	});
});