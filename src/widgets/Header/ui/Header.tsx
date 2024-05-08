import { useCallback, useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import styles from './Header.module.scss';
import Logo from 'shared/assets/icons/logo.svg';
import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import Button, { ButtonTheme } from 'shared/ui/Button/Button';
import { LoginModal } from 'features/AuthByUsername';
import { getUserAuthData, userActions } from 'entities/User';

type HeaderProps = {
	className?: string;
};

const Header = ({ className }: HeaderProps) => {
	const { t } = useTranslation();
	const [isAuthModal, setIsAuthModal] = useState(false);
	const authData = useSelector(getUserAuthData);
	const dispatch = useDispatch();

	const onToggleModal = useCallback(() => {
		setIsAuthModal(prev => !prev);
	}, []);

	const onLogout = useCallback(() => {
		setIsAuthModal(false);
		dispatch(userActions.logout());
	}, [dispatch]);

	return (
		<header className={classNames(styles.header, {}, [className])}>
			<div className={styles.header__container}>
				<strong className={styles.header__logo}>
					<Link to='/' className={styles.header__logoLink}>
						<Logo/>
					</Link>
				</strong>
				{authData && <Button theme={ButtonTheme.OUTLINE_INVERTED} onClick={onLogout}>
					{t('logout')}
				</Button>}
				{!authData && (
					<>
						<Button theme={ButtonTheme.OUTLINE_INVERTED} onClick={onToggleModal}>
							{t('login')}
						</Button>
						{ isAuthModal && <LoginModal isOpen={isAuthModal} onClose={onToggleModal}/> }
					</>
				)}
			</div>
		</header>
	);
};

export default Header;
