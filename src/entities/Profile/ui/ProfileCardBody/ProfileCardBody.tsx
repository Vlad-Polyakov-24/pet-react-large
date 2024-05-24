import styles from './ProfileCardBody.module.scss';
import { useTranslation } from 'react-i18next';
import type { Profile } from '../../model/types/profile';
import Input from 'shared/ui/Input/Input';
import { type Currency, CurrencySelect } from 'entities/Currency';
import { type Country, CountrySelect } from 'entities/Country';

export type ProfileCardBodyProps = {
	data?: Profile;
	readonly?: boolean;
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

	return (
		<div className={styles.card__body}>
			<Input
				id={'profile-firstname'}
				label={t('your firstname')}
				value={data?.firstname}
				placeholder={t('your firstname')}
				onChange={onChangeFirstname}
				readonly={readonly}
			/>
			<Input
				id={'profile-lastname'}
				label={t('your lastname')}
				value={data?.lastname}
				placeholder={t('your lastname')}
				onChange={onChangeLastname}
				readonly={readonly}
			/>
			<Input
				id={'profile-age'}
				label={t('your age')}
				value={data?.age}
				placeholder={t('your age')}
				onChange={onChangeAge}
				readonly={readonly}
			/>
			<Input
				id={'profile-city'}
				label={t('your city')}
				value={data?.city}
				placeholder={t('your city')}
				onChange={onChangeCity}
				readonly={readonly}
			/>
			<Input
				id={'profile-username'}
				label={t('username')}
				value={data?.username}
				placeholder={t('username')}
				onChange={onChangeUsername}
				readonly={readonly}
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