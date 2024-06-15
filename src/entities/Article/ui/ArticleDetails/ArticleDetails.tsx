import { memo, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { classNames } from 'shared/lib/classNames/classNames';
import DynamicModuleLoader, { type ReducersList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { articleDetailsReducer } from '../../model/slice/articleDetailsSlice';
import useAppDispatch from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import fetchArticleByID from '../../model/services/fetchArticleByID/fetchArticleByID';
import {
	getArticleDetailsData,
	getArticleDetailsError,
	getArticleDetailsIsLoading,
} from '../../model/selectors/articleDetails';
import { useTranslation } from 'react-i18next';
import Text, { TextAlign } from 'shared/ui/Text/Text';

import styles from './ArticleDetails.module.scss';
import Skeleton from 'shared/ui/Skeleton/Skeleton';

type ArticleDetailsProps = {
	className?: string;
	id: string;
};

const reducers: ReducersList = {
	articleDetails: articleDetailsReducer,
};

const ArticleDetails = memo((props: ArticleDetailsProps) => {
	const {
		className,
		id,
	} = props;
	const { t } = useTranslation('articles');
	const dispatch = useAppDispatch();
	const article = useSelector(getArticleDetailsData);
	// const isLoading = useSelector(getArticleDetailsIsLoading);
	const isLoading = true;
	const error = useSelector(getArticleDetailsError);
	let content;

	useEffect(() => {
		void dispatch(fetchArticleByID(id));
	}, [dispatch, id]);

	if (isLoading) {
		content = (
			<div>
				<Skeleton width={200} height={200} border={'50%'} className={'m-centred'}/>
				<Skeleton width={300} height={32} className={'mt-20'}/>
				<Skeleton width={600} height={24} className={'mt-20'}/>
				<Skeleton width={'100%'} height={200} className={'mt-30'}/>
				<Skeleton width={'100%'} height={200} className={'mt-30'}/>
				<Skeleton width={'100%'} height={200} className={'mt-30'}/>
				<Skeleton width={'100%'} height={200} className={'mt-30'}/>
				<Skeleton width={'100%'} height={200} className={'mt-30'}/>
			</div>
		);
	} else if (error) {
		content = (
			<Text title={t('an error occurred while loading the article')} titleAlign={TextAlign.CENTER}/>
		);
	} else {
		content = (
			<h1>ArticleDetails</h1>
		);
	}

	return (
		<DynamicModuleLoader reducers={reducers} removeAfterUnmount>
			<div className={classNames(styles.article, {}, [className])}>
				{content}
			</div>
		</DynamicModuleLoader>
	);
});

export default ArticleDetails;
