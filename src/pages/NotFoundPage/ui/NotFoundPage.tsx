import { memo } from 'react';
import styles from './NotFoundPage.module.scss';
import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import Container from 'shared/ui/Container/Container';

type NotFoundPageProps = {
	className?: string;
};

const NotFoundPage = memo(({ className }: NotFoundPageProps) => {
	const { t } = useTranslation();

	return (
		<div className={classNames(styles.notFound, {}, [className])}>
			<Container>
				<h1>{t('page not found')}</h1>
			</Container>
		</div>
	);
});

export default NotFoundPage;
