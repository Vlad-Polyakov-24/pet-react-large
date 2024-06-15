import { memo } from 'react';
import { useParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';

import Container from 'shared/ui/Container/Container';
import { ArticleDetails } from 'entities/Article';

import styles from './ArticleDetailsPage.module.scss';

type ArticleDetailsPageProps = {
	className?: string;
};

const ArticleDetailsPage = memo(({ className }: ArticleDetailsPageProps) => {
	const { t } = useTranslation('articles');
	const { id }  = useParams<{ id: string }>();

	if (!id) return (
		<section className={classNames(styles.articleDetails, {}, [className])}>
			<Container>
				<h1>{t('article is not found')}</h1>
			</Container>
		</section>
	);

	return (
		<section className={classNames(styles.articleDetails, {}, [className])}>
			<Container>
				<ArticleDetails id={id}/>
			</Container>
		</section>
	);
});

export default ArticleDetailsPage;
