import React, { memo } from 'react';
import { useTranslation } from 'react-i18next';
import Container from 'shared/ui/Container/Container';
import { Counter } from 'entities/Counter';

const MainPage = memo(() => {
	const { t } = useTranslation('main');

	return (
		<section>
			<Container>
				<h1 className='section-title'>{t('h1')}</h1>
				<Counter/>
			</Container>
		</section>
	);
});

export default MainPage;
