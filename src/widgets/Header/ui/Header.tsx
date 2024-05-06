import { useCallback, useState } from 'react';
import { Link } from 'react-router-dom';
import styles from './Header.module.scss';
import Logo from 'shared/assets/icons/logo.svg';
import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import Button, { ButtonTheme } from 'shared/ui/Button/Button';
import { LoginModal } from 'features/AuthByUsername';

type HeaderProps = {
	className?: string;
};

const Header = ({ className }: HeaderProps) => {
	const { t } = useTranslation();
	const [isAuthModal, setIsAuthModal] = useState(false);

	const onToggleModal = useCallback(() => {
		setIsAuthModal(prev => !prev);
	}, []);

	return (
		<header className={classNames(styles.header, {}, [className])}>
			<div className={styles.header__container}>
				<strong className={styles.header__logo}>
					<Link to='/' className={styles.header__logoLink}>
						<Logo/>
					</Link>
				</strong>
				<Button theme={ButtonTheme.OUTLINE_INVERTED} onClick={onToggleModal}>
					{t('login')}
				</Button>
				<LoginModal
					isOpen={isAuthModal}
					onClose={onToggleModal}
				/>
			</div>
		</header>
	);
};

export default Header;
