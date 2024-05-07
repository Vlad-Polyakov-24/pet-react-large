import { type ChangeEvent, type InputHTMLAttributes, memo } from 'react';
import styles from './Input.module.scss';
import { classNames } from 'shared/lib/classNames/classNames';

type HTMLInputProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'onChange'>;

type InputProps = {
	className?: string;
	value?: string;
	onChange?: (value: string) => void;
	label?: string;
} & HTMLInputProps;

const Input = memo((props: InputProps) => {
	const {
		className,
		value,
		onChange,
		type = 'text',
		label,
		id,
		...otherProps
	} = props;

	const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
		onChange?.(e.target.value);
	};

	return (
		<div className={classNames(styles.inputGroup, {}, [className])}>
			{label && <label htmlFor={id} className={styles.inputGroup__label}>{label}</label>}
			<input
				className={styles.input}
				type={type}
				id={id}
				value={value}
				onChange={onChangeHandler}
				{...otherProps}
			/>
		</div>
	);
});

Input.displayName = 'Input';

export default Input;
