import React, { memo } from 'react';
import { useTranslation } from 'react-i18next';
import Container from 'shared/ui/Container/Container';
import DynamicModuleLoader, { type ReducersList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { profileReducer } from 'entities/Profile';

const reducers: ReducersList = {
	profile: profileReducer,
};

const ProfilePage = memo(() => {
	const { t } = useTranslation('profile');

	return (
		<DynamicModuleLoader reducers={reducers} removeAfterUnmount>
			<section>
				<Container>
					<h1 className='section-title'>{t('profile page')}</h1>
				</Container>
			</section>
		</DynamicModuleLoader>
	);
});

export default ProfilePage;
