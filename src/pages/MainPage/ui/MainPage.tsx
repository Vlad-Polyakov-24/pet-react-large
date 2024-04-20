import React from 'react';
import { useTranslation } from 'react-i18next';
import Container from 'shared/ui/Container/Container';

const MainPage = () => {
    const {t} = useTranslation('main');

    return (
        <section>
            <Container>
                <h1 className='section-title'>{t('h1')}</h1>
            </Container>
        </section>
    );
};

export default MainPage;
