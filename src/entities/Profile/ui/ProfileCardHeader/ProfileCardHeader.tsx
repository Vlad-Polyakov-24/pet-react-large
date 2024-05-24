import styles from './ProfileCardHeader.module.scss';
import { useCallback } from 'react';
import { useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { profileActions } from '../../model/slice/profileSlice';
import updateProfileData from '../../model/services/updateProfileData/updateProfileData';
import useAppDispatch from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import getProfileReadonly from '../../model/selectors/getProfileReadonly/getProfileIsReadonly';
import Text from 'shared/ui/Text/Text';
import Button, { ButtonTheme } from 'shared/ui/Button/Button';


const ProfileCardHeader = () => {
	const { t } = useTranslation('profile');
	const dispatch = useAppDispatch();
	const readonly = useSelector(getProfileReadonly);

	const onEdit = useCallback(() => {
		dispatch(profileActions.setReadonly(false));
	}, [dispatch]);

	const onCancelEdit = useCallback(() => {
		dispatch(profileActions.cancelEdit());
	}, [dispatch]);

	const onSave = useCallback(() => {
		void dispatch(updateProfileData());
	}, [dispatch]);

	return (
		<div className={styles.card__header}>
			<Text title={t('profile')}/>
			<div className={styles.card__headerButtons}>
				{readonly ?
					<Button
						theme={ButtonTheme.OUTLINE}
						onClick={onEdit}
					>
						{t('edit')}
					</Button>
					:
					<>
						<Button
							theme={ButtonTheme.OUTLINE}
							onClick={onSave}
						>
							{t('save')}
						</Button>
						<Button
							theme={ButtonTheme.OUTLINE_RED}
							onClick={onCancelEdit}
						>
							{t('cancel')}
						</Button>
					</>
				}
			</div>
		</div>
	);
};

export default ProfileCardHeader;
