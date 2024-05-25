import styles from './ProfileCardBody.module.scss';
import { useTranslation } from 'react-i18next';
import { type Profile, ValidateProfileErrors } from '../../model/types/profile';
import Input from 'shared/ui/Input/Input';
import { type Currency, CurrencySelect } from 'entities/Currency';
import { type Country, CountrySelect } from 'entities/Country';

export type ProfileCardBodyProps = {
	data?: Profile;
	readonly?: boolean;
	validateErrors?: ValidateProfileErrors[];
	onChangeFirstname?: (value?: string) => void;
	onChangeLastname?: (value?: string) => void;
	onChangeAge?: (value?: string) => void;
	onChangeCity?: (value?: string) => void;
	onChangeUsername?: (value?: string) => void;
	onChangeAvatar?: (value?: string) => void;
	onChangeCurrency?: (currency?: Currency) => void;
	onChangeCountry?: (county?: Country) => void;
};

const ProfileCardBody = (props: ProfileCardBodyProps) => {
	const {
		data,
		readonly,
		validateErrors,
		onChangeFirstname,
		onChangeLastname,
		onChangeAge,
		onChangeCity,
		onChangeUsername,
		onChangeAvatar,
		onChangeCurrency,
		onChangeCountry,
	} = props;
	const { t } = useTranslation('profile');
	const validateErrorsTranslates = {
		[ValidateProfileErrors.SERVER_ERROR]: t('server error while saving'),
		[ValidateProfileErrors.NO_DATA]: t('data not specified'),
		[ValidateProfileErrors.INCORRECT_FIRSTNAME]: t('firstname is required'),
		[ValidateProfileErrors.INCORRECT_LASTNAME]: t('lastname is required'),
		[ValidateProfileErrors.INCORRECT_AGE]: t('invalid age'),
		[ValidateProfileErrors.INCORRECT_CITY]: t('city is required'),
		[ValidateProfileErrors.INCORRECT_USERNAME]: t('username is required'),
	};

	const checkError = (errorKey: ValidateProfileErrors): string | undefined => validateErrors?.includes(errorKey)
		? validateErrorsTranslates[errorKey]
		: undefined;

	const firstnameError = checkError(ValidateProfileErrors.INCORRECT_FIRSTNAME);
	const lastnameError = checkError(ValidateProfileErrors.INCORRECT_LASTNAME);
	const ageError = checkError(ValidateProfileErrors.INCORRECT_AGE);
	const cityError = checkError(ValidateProfileErrors.INCORRECT_CITY);
	const usernameError = checkError(ValidateProfileErrors.INCORRECT_USERNAME);

	return (
		<div className={styles.card__body}>
			<Input
				id={'profile-firstname'}
				label={t('your firstname')}
				value={data?.firstname}
				placeholder={t('your firstname')}
				onChange={onChangeFirstname}
				readonly={readonly}
				error={firstnameError}
			/>
			<Input
				id={'profile-lastname'}
				label={t('your lastname')}
				value={data?.lastname}
				placeholder={t('your lastname')}
				onChange={onChangeLastname}
				readonly={readonly}
				error={lastnameError}
			/>
			<Input
				type={'number'}
				id={'profile-age'}
				label={t('your age')}
				value={data?.age}
				placeholder={t('your age')}
				onChange={onChangeAge}
				readonly={readonly}
				error={ageError}
			/>
			<Input
				id={'profile-city'}
				label={t('your city')}
				value={data?.city}
				placeholder={t('your city')}
				onChange={onChangeCity}
				readonly={readonly}
				error={cityError}
			/>
			<Input
				id={'profile-username'}
				label={t('username')}
				value={data?.username}
				placeholder={t('username')}
				onChange={onChangeUsername}
				readonly={readonly}
				error={usernameError}
			/>
			<Input
				id={'profile-avatar'}
				label={t('avatar url')}
				value={data?.avatar}
				placeholder={t('avatar url')}
				onChange={onChangeAvatar}
				readonly={readonly}
			/>
			<CurrencySelect
				value={data?.currency}
				onChange={onChangeCurrency}
				readonly={readonly}
			/>
			<CountrySelect
				value={data?.country}
				onChange={onChangeCountry}
				readonly={readonly}
			/>
		</div>
	);
};

export default ProfileCardBody;