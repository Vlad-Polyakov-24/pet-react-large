import { memo } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import styles from './ArticleBlockCodeComponent.module.scss';

type ArticleBlockCodeComponentProps = {
	className?: string;
};

const ArticleBlockCodeComponent = memo(({ className }: ArticleBlockCodeComponentProps) => {
	return (
		<div className={classNames('', {}, [className])}>
			<h1>ArticleBlockCodeComponent</h1>
		</div>
	);
});

export default ArticleBlockCodeComponent;
