import { memo } from 'react';
import styles from './Text.module.scss';
import { classNames } from 'shared/lib/classNames/classNames';

export enum TextTheme {
	DEFAULT = 'text--default',
	ERROR = 'text--error',
}

export enum TextAlign {
	LEFT = 'left',
	RIGHT = 'right',
	CENTER = 'center',
}

type TextProps = {
	className?: string;
	title?: string;
	description?: string;
	theme?: TextTheme;
	titleAlign?: TextAlign;
	descAlign?: TextAlign;
};

const Text = memo((props: TextProps) => {
	const {
		className,
		title,
		description,
		theme = TextTheme.DEFAULT,
		titleAlign = TextAlign.LEFT,
		descAlign = TextAlign.LEFT,
	} = props;

	return (
		<div className={classNames(styles.text, {}, [className, styles[theme]])}>
			{title && <p className={classNames(styles.text__title, {}, [styles[titleAlign]])}>{title}</p>}
			{description && <p className={classNames(styles.text__description, {}, [styles[descAlign]])}>{description}</p>}
		</div>
	);
});

export default Text;
