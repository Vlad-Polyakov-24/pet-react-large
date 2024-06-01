import { profileActions, profileReducer } from './profileSlice';
import { type ProfileSchema, ValidateProfileErrors } from '../types/profile';
import updateProfileData from '../services/updateProfileData/updateProfileData';
import { Currency } from 'entities/Currency';
import { Country } from 'entities/Country';

const data = {
	username: 'admin',
	age: 22,
	country: Country.Ukraine,
	lastname: 'ulbi tv',
	first: 'asd',
	city: 'asf',
	currency: Currency.USD,
};

describe('profileSlice.test', () => {
	test('test set readonly', () => {
		const state: Partial<ProfileSchema> = { readonly: false };

		expect(profileReducer(state as ProfileSchema, profileActions.setReadonly(true)))
			.toEqual({ readonly: true });
	});

	test('test cancel edit', () => {
		const state: Partial<ProfileSchema> = { data, form: { username: '' } };

		expect(profileReducer(state as ProfileSchema, profileActions.cancelEdit()))
			.toEqual({
				readonly: true,
				validateErrors: undefined,
				data,
				form: data,
			});
	});

	test('test update profile', () => {
		const state: Partial<ProfileSchema> = { form: { username: 'username' } };

		expect(profileReducer(
			state as ProfileSchema,
			profileActions.updateProfile({
				username: 'username12',
			}),
		)).toEqual({
			form: { username: 'username12' },
		});
	});

	test('test update profile service pending', () => {
		const state: Partial<ProfileSchema> = {
			isLoading: false,
			validateErrors: [ValidateProfileErrors.SERVER_ERROR],
		};

		expect(profileReducer(
			state as ProfileSchema,
			updateProfileData.pending(''),
		)).toEqual({
			isLoading: true,
			validateErrors: undefined,
		});
	});

	test('test update profile service fulfilled', () => {
		const state: Partial<ProfileSchema> = {
			isLoading: true,
		};

		expect(profileReducer(
			state as ProfileSchema,
			updateProfileData.fulfilled(data, ''),
		)).toEqual({
			isLoading: false,
			validateErrors: undefined,
			readonly: true,
			validateError: undefined,
			form: data,
			data,
		});
	});
});