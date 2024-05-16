import React, { memo } from 'react';
import { useTranslation } from 'react-i18next';
import Container from 'shared/ui/Container/Container';

const AboutPage = memo(() => {
	const { t } = useTranslation('about');

	return (
		<section>
			<Container>
				<h1 className='section-title'>{t('h1')}</h1>
			</Container>
		</section>
	);
});

export default AboutPage;
