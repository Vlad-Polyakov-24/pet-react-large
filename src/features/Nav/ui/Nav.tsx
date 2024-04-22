import styles from './Nav.module.scss';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import AppNavLink, { AppNavLinkTheme } from 'shared/ui/AppNavLink/AppNavLink';

type NavProps = {
	className?: string;
	place?: 'header' | 'footer';
};

const Nav = ({ className, place }: NavProps) => {
	const { t } = useTranslation();

	return (
		<nav className={classNames(styles.nav, { [styles.navHeader]: place === 'header', [styles.navFooter]: place === 'footer' }, [className])}>
			<ul className={styles.nav__list}>
				<li>
					<AppNavLink to='/' theme={AppNavLinkTheme.SECONDARY}>{t('main')}</AppNavLink>
				</li>
				<li>
					<AppNavLink to='/about' theme={AppNavLinkTheme.SECONDARY}>{t('about')}</AppNavLink>
				</li>
			</ul>
		</nav>
	);
};

export default Nav;
