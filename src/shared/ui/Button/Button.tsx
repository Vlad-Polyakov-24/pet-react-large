import { type ButtonHTMLAttributes, type FC } from 'react';
import styles from './Button.module.scss';
import { classNames } from 'shared/lib/classNames/classNames';

export enum ThemeButton {
	DEFAULT = 'btn--default',
}

type ButtonProps = {
	className?: string;
	theme?: ThemeButton;
} & ButtonHTMLAttributes<HTMLButtonElement>;

const Button: FC<ButtonProps> = (props) => {
	const {
		className,
		children,
		theme,
		type = 'button',
		...otherProps
	} = props;

	return (
		<button
			type={type}
			className={classNames(styles.btn, {}, [className, styles[theme]])}
			{...otherProps}
		>
			{children}
		</button>
	);
};

export default Button;
