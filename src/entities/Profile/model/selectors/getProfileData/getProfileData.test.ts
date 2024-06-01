import { StateSchema } from 'app/providers/StoreProvider';
import getProfileData from './getProfileData';
import { Currency } from 'entities/Currency';
import { Country } from 'entities/Country';

describe('getProfileData.test', () => {
	const data = {
		firstname: 'firstname',
		lastname: 'lastname',
		age: 22,
		currency: Currency.UAH,
		country: Country.Ukraine,
		city: 'Kharkiv',
		username: 'admin',
	};

	test('should return error', () => {
		const state: Partial<StateSchema> = {
			profile: {
				isLoading: false,
				readonly: true,
				data,
			},
		};

		expect(getProfileData(state as StateSchema)).toEqual(data);
	});

	test('should work with empty state', () => {
		const state: Partial<StateSchema> = {};
		expect(getProfileData(state as StateSchema)).toEqual(undefined);
	});
});