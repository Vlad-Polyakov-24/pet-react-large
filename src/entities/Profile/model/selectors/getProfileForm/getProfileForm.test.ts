import { StateSchema } from 'app/providers/StoreProvider';
import getProfileForm from './getProfileForm';
import { Currency } from 'entities/Currency';
import { Country } from 'entities/Country';

describe('getProfileForm.test', () => {
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
				form: data,
			},
		};

		expect(getProfileForm(state as StateSchema)).toEqual(data);
	});

	test('should work with empty state', () => {
		const state: Partial<StateSchema> = {};
		expect(getProfileForm(state as StateSchema)).toEqual(undefined);
	});
});