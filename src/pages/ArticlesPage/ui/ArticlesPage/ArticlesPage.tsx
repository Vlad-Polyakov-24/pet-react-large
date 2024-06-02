import styles from './ArticlesPage.module.scss';
import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import Container from 'shared/ui/Container/Container';

type ArticlesPageProps = {
	className?: string;
};

const ArticlesPage = memo(({ className }: ArticlesPageProps) => {
	const { t } = useTranslation('articles');
	
	return (
		<section className={classNames(styles.articles, {}, [className])}>
			<Container>
				<h1>{t('articles page')}</h1>
			</Container>
		</section>
	);
});

export default ArticlesPage;
