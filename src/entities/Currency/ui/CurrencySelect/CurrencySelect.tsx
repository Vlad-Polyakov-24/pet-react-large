import { memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { Currency } from '../../model/types/currency';
import Select from 'shared/ui/Select/Select';

type CurrencySelectProps = {
	value?: Currency;
	readonly?: boolean;
	onChange?: (value: Currency) => void;
};

const options = [
	{ value: Currency.USD, content: Currency.USD },
	{ value: Currency.UAH, content: Currency.UAH },
	{ value: Currency.EUR, content: Currency.EUR },
];

const CurrencySelect = memo(({ value, readonly, onChange }: CurrencySelectProps) => {
	const { t } = useTranslation('profile');

	const onChangeHandler = useCallback((value: string) => {
		onChange?.(value as Currency);
	}, [onChange]);

	return (
		<Select
			label={t('your currency')}
			value={value}
			options={options}
			readonly={readonly}
			onChange={onChangeHandler}
		/>
	);
});

export default CurrencySelect;
