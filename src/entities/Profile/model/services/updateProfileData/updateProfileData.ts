import { createAsyncThunk } from '@reduxjs/toolkit';
import type { ThunkConfig } from 'app/providers/StoreProvider';
import { type Profile, ValidateProfileErrors } from '../../types/profile';
import getProfileForm from '../../selectors/getProfileForm/getProfileForm';
import validateProfileData from '../../services/validateProfileData/validateProfileData';

const updateProfileData = createAsyncThunk<Profile, void, ThunkConfig<ValidateProfileErrors[]>>(
	'profile/updateProfileData',
	async (_, thunkAPI) => {
		const { extra, rejectWithValue, getState } = thunkAPI;
		const formData = getProfileForm(getState());
		const errors = validateProfileData(formData);

		if (errors.length) return rejectWithValue(errors);

		try {
			const response = await extra.api.put<Profile>('/profile', formData);

			if (!response.data) throw new Error();

			return response.data;
		} catch (e) {
			console.error(e);
			return rejectWithValue([ValidateProfileErrors.SERVER_ERROR]);
		}
	},
);

export default updateProfileData;