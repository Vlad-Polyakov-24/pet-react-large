import { createSlice } from '@reduxjs/toolkit'
import { ProfileSchema } from '../types/profile';

const initialState: ProfileSchema = {
	data: null,
	isLoading: false,
	readonly: true,
	error: null,
};

export const profileSlice = createSlice({
	name: 'profile',
	initialState,
	reducers: {},
});

export const {
	actions: profileActions,
	reducer: profileReducer
} = profileSlice;