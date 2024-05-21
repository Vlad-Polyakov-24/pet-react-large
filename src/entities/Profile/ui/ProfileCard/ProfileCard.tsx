import styles from './ProfileCard.module.scss';
import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import getProfileData from 'entities/Profile/model/selectors/getProfileData/getProfileData';
import getProfileError from 'entities/Profile/model/selectors/getProfileError/getProfileError';
import getProfileIsLoading from 'entities/Profile/model/selectors/getProfileIsLoading/getProfileIsLoading';
import Text from 'shared/ui/Text/Text';
import Button, { ButtonTheme } from 'shared/ui/Button/Button';
import Input from 'shared/ui/Input/Input';

type ProfileCardProps = {
	className?: string;
};

const ProfileCard = ({ className }: ProfileCardProps) => {
	const { t } = useTranslation('profile');
	const data = useSelector(getProfileData);
	const error = useSelector(getProfileError);
	const isLoading = useSelector(getProfileIsLoading);

	return (
		<div className={classNames(styles.card, {}, [className])}>
			<div className={styles.card__header}>
				<Text title={t('profile page')}/>
				<Button theme={ButtonTheme.OUTLINE}>
					{t('edit')}
				</Button>
			</div>
			<div className={styles.card__body}>
				<Input
					value={data?.firstname}
					placeholder={t('your firstname')}
				/>
				<Input
					value={data?.lastname}
					placeholder={t('your lastname')}
				/>
			</div>
		</div>
	);
};

export default ProfileCard;
