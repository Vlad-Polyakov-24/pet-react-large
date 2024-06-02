import styles from './ArticleDetailsPage.module.scss';
import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import Container from 'shared/ui/Container/Container';

type ArticleDetailsPageProps = {
	className?: string;
};

const ArticleDetailsPage = memo(({ className }: ArticleDetailsPageProps) => {
	const { t } = useTranslation('articles');

	return (
		<section className={classNames(styles.articleDetails, {}, [className])}>
			<Container>
				<h1>{t('article details page')}</h1>
			</Container>
		</section>
	);
});

export default ArticleDetailsPage;
