import { memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { Country } from '../../model/types/country';
import Select from 'shared/ui/Select/Select';

type CountrySelectProps = {
	value?: Country;
	readonly?: boolean;
	onChange?: (value: Country) => void;
};

const options = [
	{ value: Country.Ukraine, content: Country.Ukraine },
	{ value: Country.USA, content: Country.USA },
	{ value: Country.UK, content: Country.UK },
	{ value: Country.France, content: Country.France },
	{ value: Country.Germany, content: Country.Germany },
];

const CountrySelect = memo(({ value, readonly, onChange }: CountrySelectProps) => {
	const { t } = useTranslation('profile');

	const onChangeHandler = useCallback((value: string) => {
		onChange?.(value as Country);
	}, [onChange]);

	return (
		<Select
			label={t('your country')}
			value={value}
			options={options}
			readonly={readonly}
			onChange={onChangeHandler}
		/>
	);
});

export default CountrySelect;
