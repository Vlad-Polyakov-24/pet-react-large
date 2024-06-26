import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { User, UserSchema } from '../types/UserSchema';
import { USER_LOCALSTORAGE_KEY } from 'shared/const/localStorage';

const initialState: UserSchema = {
	_mounted: false,
};

export const userSlice = createSlice({
	name: 'user',
	initialState,
	reducers: {
		setAuthData: (state, action: PayloadAction<User>) => {
			state.authData = action.payload;
		},
		initAuthData: (state) => {
			const user = localStorage.getItem(USER_LOCALSTORAGE_KEY);
			if (user) state.authData = JSON.parse(user);
			state._mounted = true;
		},
		logout: (state) => {
			state.authData = undefined;
			localStorage.removeItem(USER_LOCALSTORAGE_KEY);
		},
	},
});

export const {
	actions: userActions,
	reducer: userReducer
} = userSlice;