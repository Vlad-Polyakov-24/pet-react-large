import { useCallback, useState } from 'react';
import { Link } from 'react-router-dom';
import styles from './Header.module.scss';
import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import Button, { ButtonTheme } from 'shared/ui/Button/Button';
import Modal from 'shared/ui/Modal/Modal';
import Logo from 'shared/assets/icons/logo.svg';

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
				<Modal isOpen={isAuthModal} onClose={onToggleModal}>
					<p>
						Lorem ipsum dolor sit amet, consectetur adipisicing elit.
						Ab ad aliquid atque commodi consequatur ea eligendi error,
						fugit itaque magnam modi obcaecati officia perspiciatis quaerat quas quasi ratione similique sint,
						soluta totam ut veniam vitae, voluptatum. Beatae dicta, ex expedita incidunt magnam maxime
						molestias,
						quis quisquam ratione temporibus veritatis vitae?
					</p>
				</Modal>
			</div>
		</header>
	);
};

export default Header;
