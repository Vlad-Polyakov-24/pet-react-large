import { type ChangeEvent, type InputHTMLAttributes, memo } from 'react';
import styles from './Input.module.scss';
import { classNames, type Mods } from 'shared/lib/classNames/classNames';
import Text, { TextTheme } from 'shared/ui/Text/Text';

type HTMLInputProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'onChange' | 'readOnly'>;

type InputProps = {
	className?: string;
	value?: string | number;
	onChange?: (value: string) => void;
	label?: string;
	readonly?: boolean;
	error?: string;
} & HTMLInputProps;

const Input = memo((props: InputProps) => {
	const {
		className,
		value,
		onChange,
		type = 'text',
		label,
		id,
		readonly,
		error,
		...otherProps
	} = props;
	const mods: Mods = {
		[styles.readonly]: readonly,
	};

	const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
		onChange?.(e.target.value);
	};

	return (
		<div className={classNames(styles.input, mods, [className])}>
			{label && <label htmlFor={id} className={styles.input__label}>{label}</label>}
			{error && <Text theme={TextTheme.ERROR} className={styles.input__error} description={error}/>}
			<input
				className={styles.input__item}
				type={type}
				id={id}
				value={value}
				readOnly={readonly}
				onChange={onChangeHandler}
				{...otherProps}
			/>
		</div>
	);
});

export default Input;
