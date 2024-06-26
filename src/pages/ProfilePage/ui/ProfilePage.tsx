import React, { memo, useCallback, useEffect } from 'react';
import { useSelector } from 'react-redux';
import {
	fetchProfileData,
	getProfileError, getProfileForm,
	getProfileIsLoading, getProfileReadonly, getProfileValidateErrors, profileActions,
	ProfileCard,
	profileReducer,
} from 'entities/Profile';
import { type Currency } from 'entities/Currency';
import { type Country } from 'entities/Country';
import DynamicModuleLoader, { type ReducersList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import useAppDispatch from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import Container from 'shared/ui/Container/Container';

const reducers: ReducersList = {
	profile: profileReducer,
};

const ProfilePage = memo(() => {
	const dispatch = useAppDispatch();
	const formData = useSelector(getProfileForm);
	const error = useSelector(getProfileError);
	const isLoading = useSelector(getProfileIsLoading);
	const readonly = useSelector(getProfileReadonly);
	const validateErrors = useSelector(getProfileValidateErrors);

	useEffect(() => {
		if (__PROJECT__ !== 'storybook') {
			void dispatch(fetchProfileData());
		}
	}, [dispatch]);

	const onChangeFirstname = useCallback((value?: string) => {
		dispatch(profileActions.updateProfile({ firstname: value || '' }));
	}, [dispatch]);

	const onChangeLastname = useCallback((value?: string) => {
		dispatch(profileActions.updateProfile({ lastname: value || '' }));
	}, [dispatch]);

	const onChangeAge = useCallback((value?: string) => {
		dispatch(profileActions.updateProfile({ age: Number(value || '') }));
	}, [dispatch]);

	const onChangeCity = useCallback((value?: string) => {
		dispatch(profileActions.updateProfile({ city: value || '' }));
	}, [dispatch]);

	const onChangeUsername = useCallback((value?: string) => {
		dispatch(profileActions.updateProfile({ username: value || '' }));
	}, [dispatch]);

	const onChangeAvatar = useCallback((value?: string) => {
		dispatch(profileActions.updateProfile({ avatar: value || '' }));
	}, [dispatch]);

	const onChangeCurrency = useCallback((currency?: Currency) => {
		dispatch(profileActions.updateProfile({ currency }));
	}, [dispatch]);

	const onChangeCountry = useCallback((country?: Country) => {
		dispatch(profileActions.updateProfile({ country }));
	}, [dispatch]);

	return (
		<DynamicModuleLoader reducers={reducers} removeAfterUnmount>
			<section>
				<Container>
					<ProfileCard
						data={formData}
						error={error}
						isLoading={isLoading}
						readonly={readonly}
						onChangeFirstname={onChangeFirstname}
						onChangeLastname={onChangeLastname}
						onChangeAge={onChangeAge}
						onChangeCity={onChangeCity}
						onChangeUsername={onChangeUsername}
						onChangeAvatar={onChangeAvatar}
						onChangeCurrency={onChangeCurrency}
						onChangeCountry={onChangeCountry}
						validateErrors={validateErrors}
					/>
				</Container>
			</section>
		</DynamicModuleLoader>
	);
});

export default ProfilePage;
