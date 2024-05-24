import styles from './ProfileCardAvatar.module.scss';
import Avatar from 'shared/ui/Avatar/Avatar';

type ProfileCardAvatarProps = {
	src?: string;
};

const ProfileCardAvatar = ({ src }: ProfileCardAvatarProps) => {
	return (
		<div className={styles.card__avatar}>
			<Avatar src={src} size={200} alt={'user avatar'}/>
		</div>
	);
};

export default ProfileCardAvatar;
