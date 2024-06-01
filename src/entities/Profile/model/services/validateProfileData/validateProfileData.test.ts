import validateProfileData from './validateProfileData';
import { ValidateProfileErrors } from '../../types/profile';
import { Currency } from 'entities/Currency';
import { Country } from 'entities/Country';

const data = {
	firstname: 'firstname',
	lastname: 'lastname',
	age: 22,
	currency: Currency.UAH,
	country: Country.Ukraine,
	city: 'Kharkiv',
	username: 'admin',
};

describe('validateProfileData.test', () => {
	test('success', async () => {
		const result  = validateProfileData(data);

		expect(result).toEqual([]);
	});

	test('without first and last name', async () => {
		const result  = validateProfileData({ ...data, firstname: '', lastname: '' });

		expect(result).toEqual([
			ValidateProfileErrors.INCORRECT_FIRSTNAME,
			ValidateProfileErrors.INCORRECT_LASTNAME,
		]);
	});

	test('incorrect age', async () => {
		const result  = validateProfileData({ ...data, age: undefined });

		expect(result).toEqual([
			ValidateProfileErrors.INCORRECT_AGE,
		]);
	});

	test('incorrect city', async () => {
		const result  = validateProfileData({ ...data, city: '' });

		expect(result).toEqual([
			ValidateProfileErrors.INCORRECT_CITY,
		]);
	});

	test('incorrect all', async () => {
		const result  = validateProfileData({});

		expect(result).toEqual([
			ValidateProfileErrors.INCORRECT_FIRSTNAME,
			ValidateProfileErrors.INCORRECT_LASTNAME,
			ValidateProfileErrors.INCORRECT_AGE,
			ValidateProfileErrors.INCORRECT_CITY,
			ValidateProfileErrors.INCORRECT_USERNAME,
		]);
	});
});