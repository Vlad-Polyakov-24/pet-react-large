import { type ButtonHTMLAttributes, type FC, memo } from 'react';
import styles from './Button.module.scss';
import { classNames, type Mods } from 'shared/lib/classNames/classNames';

export enum ButtonTheme {
	CLEAR = 'btn--clear',
	OUTLINE = 'btn--outline',
	OUTLINE_INVERTED = 'btn--outline-inverted',
	THEME_INVERTED = 'btn--theme-inverted',
	BACKGROUND = 'btn--background',
	BACKGROUND_INVERTED = 'btn--background-inverted',
}

export enum ButtonSize {
	S = 'btn--small',
	M = 'btn--medium',
	L = 'btn--large',
	XL = 'btn--extra-large',
}

type ButtonProps = {
	className?: string;
	theme?: ButtonTheme;
	square?: boolean;
	size?: ButtonSize;
	disabled?: boolean;
} & ButtonHTMLAttributes<HTMLButtonElement>;

const Button = memo((props: ButtonProps) => {
	const {
		className,
		children,
		theme = ButtonTheme.OUTLINE,
		type = 'button',
		square,
		size = ButtonSize.M,
		disabled,
		...otherProps
	} = props;

	const mods: Mods = {
		[styles.btnSquare]: square,
		[styles[size]]: size,
		[styles.btnDisabled]: disabled,
	};

	return (
		<button
			type={type}
			className={classNames(styles.btn, mods, [className, styles[theme]])}
			disabled={disabled}
			{...otherProps}
		>
			{children}
		</button>
	);
});

export default Button;
