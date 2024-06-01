import updateProfileData from './updateProfileData';
import { TestAsyncThunk } from 'shared/config/tests/TestAsyncThunk/TestAsyncThunk';
import { Currency } from 'entities/Currency';
import { Country } from 'entities/Country';
import {ValidateProfileErrors} from "entities/Profile/model/types/profile";

const data = {
	firstname: 'firstname',
	lastname: 'lastname',
	age: 22,
	currency: Currency.UAH,
	country: Country.Ukraine,
	city: 'Kharkiv',
	username: 'admin',
};

describe('updateProfileData.test', () => {
	test('success', async () => {
		const thunk = new TestAsyncThunk(updateProfileData, {
			profile: {
				isLoading: false,
				readonly: true,
				form: data,
			},
		});
		thunk.api.put.mockReturnValue(Promise.resolve({ data: data }));
		const result  = await thunk.callThunk();

		expect(thunk.api.put).toHaveBeenCalled();
		expect(result.meta.requestStatus).toBe('fulfilled');
		expect(result.payload).toEqual(data);
	});

	test('error', async () => {
		const thunk = new TestAsyncThunk(updateProfileData, {
			profile: {
				isLoading: false,
				readonly: true,
				form: data,
			},
		});
		thunk.api.put.mockReturnValue(Promise.resolve({ status: 403 }));
		const result  = await thunk.callThunk();

		expect(result.meta.requestStatus).toBe('rejected');
		expect(result.payload).toEqual([
			ValidateProfileErrors.SERVER_ERROR,
		]);
	});

	test('validate error', async () => {
		const thunk = new TestAsyncThunk(updateProfileData, {
			profile: {
				isLoading: false,
				readonly: true,
				form: { ...data, firstname: '' },
			},
		});
		const result  = await thunk.callThunk();

		expect(result.meta.requestStatus).toBe('rejected');
		expect(result.payload).toEqual([
			ValidateProfileErrors.INCORRECT_FIRSTNAME,
		]);
	});
});