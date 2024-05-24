import styles from './Select.module.scss';
import { memo, useMemo, type ChangeEvent, type SelectHTMLAttributes } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames, type Mods } from 'shared/lib/classNames/classNames';

export type SelectOptions = {
	value: string;
	content: string;
};

type HTMLSelectProps = Omit<SelectHTMLAttributes<HTMLSelectElement>, 'onChange' | 'value'>;

type SelectProps = {
	className?: string;
	label?: string;
	options?: SelectOptions[];
	value?: string;
	readonly?: boolean;
	onChange?: (value: string) => void;
} & HTMLSelectProps;

const Select = memo((props: SelectProps) => {
	const {
		className,
		id,
		name,
		label,
		options,
		value,
		readonly,
		onChange,
	} = props;
	const { t } = useTranslation();
	const mods: Mods = {
		[styles.disabled]: readonly,
	};
	const optionsList = useMemo(() => options?.map(({ value, content }) => <option key={value} value={value}>{content}</option>), [options]);

	const onChangeHandler = (e: ChangeEvent<HTMLSelectElement>) => {
		onChange?.(e.target.value);
	};

	return (
		<div className={classNames(styles.select, mods, [className])}>
			{label && <label htmlFor={id} className={styles.select__label}>{label}</label>}
			<select
				name={name}
				id={id}
				value={value}
				className={styles.select__item}
				onChange={onChangeHandler}
				disabled={readonly}
			>
				{optionsList ? optionsList : <option disabled>{t('no content')}</option>}
			</select>
		</div>
	);
});

export default Select;
