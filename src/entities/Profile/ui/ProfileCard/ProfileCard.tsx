import styles from './ProfileCard.module.scss';
import { classNames, type Mods } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import Text, { TextAlign, TextTheme } from 'shared/ui/Text/Text';
import Loader from 'shared/ui/Loader/Loader';
import ProfileCardHeader from '../../ui/ProfileCardHeader/ProfileCardHeader';
import ProfileCardBody, { type ProfileCardBodyProps } from '../../ui/ProfileCardBody/ProfileCardBody';
import ProfileCardAvatar from 'entities/Profile/ui/ProfileCardAvatar/ProfileCardAvatar';

type ProfileCardProps = {
	className?: string;
	error?: string;
	isLoading?: boolean;
} & ProfileCardBodyProps;

const ProfileCard = (props: ProfileCardProps) => {
	const {
		className,
		data,
		error,
		isLoading,
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
	const mods: Mods = {
		[styles.editing]: !readonly,
	};

	if (isLoading) {
		return (
			<div className={classNames(styles.card, {}, [className, styles.centered])}>
				<Loader/>
			</div>
		);
	}

	if (error) {
		return (
			<div className={classNames(styles.card, {}, [className, styles.centered])}>
				<Text
					theme={TextTheme.ERROR}
					title={t('an error occurred while loading the profile')}
					titleAlign={TextAlign.CENTER}
					description={t('try refreshing the page')}
					descAlign={TextAlign.CENTER}
				/>
			</div>
		);
	}

	return (
		<div className={classNames(styles.card, mods, [className])}>
			<ProfileCardHeader/>
			{data?.avatar && <ProfileCardAvatar src={data?.avatar}/>}
			<ProfileCardBody
				data={data}
				readonly={readonly}
				onChangeFirstname={onChangeFirstname}
				onChangeLastname={onChangeLastname}
				onChangeAge={onChangeAge}
				onChangeCity={onChangeCity}
				onChangeUsername={onChangeUsername}
				onChangeAvatar={onChangeAvatar}
				onChangeCurrency={onChangeCurrency}
				onChangeCountry={onChangeCountry}
				validateErrors={validateErrors}
			/>
		</div>
	);
};

export default ProfileCard;