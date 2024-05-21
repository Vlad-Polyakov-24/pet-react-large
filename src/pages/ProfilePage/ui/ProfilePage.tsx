import React, { memo, useEffect } from 'react';
import DynamicModuleLoader, { type ReducersList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { fetchProfileData, ProfileCard, profileReducer } from 'entities/Profile';
import useAppDispatch from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import Container from 'shared/ui/Container/Container';

const reducers: ReducersList = {
	profile: profileReducer,
};

const ProfilePage = memo(() => {
	const dispatch = useAppDispatch();

	useEffect(() => {
		void dispatch(fetchProfileData());
	}, [dispatch]);

	return (
		<DynamicModuleLoader reducers={reducers} removeAfterUnmount>
			<section>
				<Container>
					<ProfileCard/>
				</Container>
			</section>
		</DynamicModuleLoader>
	);
});

export default ProfilePage;
