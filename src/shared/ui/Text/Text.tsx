import { memo } from 'react';
import styles from './Text.module.scss';
import { classNames } from 'shared/lib/classNames/classNames';

export enum TextTheme {
	DEFAULT = 'text--default',
	ERROR = 'text--error',
}

type TextProps = {
	className?: string;
	title?: string;
	description?: string;
	theme?: TextTheme;
};

const Text = memo((props: TextProps) => {
	const {
		className,
		title,
		description,
		theme = TextTheme.DEFAULT,
	} = props;

	return (
		<div className={classNames(styles.text, {}, [className, styles[theme]])}>
			{title && <p className={styles.text__title}>{title}</p>}
			{description && <p className={styles.text__description}>{description}</p>}
		</div>
	);
});

export default Text;
