import { memo } from 'react';
import styles from './ArticleBlockImageComponent.module.scss';
import { classNames } from 'shared/lib/classNames/classNames';

type ArticleBlockImageComponentProps = {
	className?: string;
};

const ArticleBlockImageComponent = memo(({ className }: ArticleBlockImageComponentProps) => {
	return (
		<div className={classNames('', {}, [className])}>
			<h1>ArticleBlockImageComponent</h1>
		</div>
	);
});

export default ArticleBlockImageComponent;
