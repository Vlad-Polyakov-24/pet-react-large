import { memo } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import styles from './ArticleBlockTextComponent.module.scss';

type ArticleBlockTextComponentProps = {
	className?: string;
};

const ArticleBlockTextComponent = memo(({ className }: ArticleBlockTextComponentProps) => {
	return (
		<div className={classNames('', {}, [className])}>
			<h1>ArticleBlockTextComponent</h1>
		</div>
	);
});

export default ArticleBlockTextComponent;
