import styles from './Header.module.scss';
import { Link } from 'react-router-dom';
import { classNames } from 'shared/lib/classNames/classNames';
import Logo from 'shared/assets/icons/logo.svg';

type HeaderProps = {
	className?: string;
};

const Header = ({ className }: HeaderProps) => {
	return (
		<header className={classNames(styles.header, {}, [className])}>
			<div className={styles.header__container}>
				<strong className={styles.header__logo}>
					<Link to='/' className={styles.header__logoLink}>
						<Logo/>
					</Link>
				</strong>
			</div>
		</header>
	);
};

export default Header;
