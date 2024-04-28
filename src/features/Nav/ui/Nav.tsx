import styles from './Nav.module.scss';
import PageMainIcon from 'shared/assets/icons/page-main_icon.svg';
import PageAboutIcon from 'shared/assets/icons/page-about_icon.svg';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import AppNavLink, { AppNavLinkTheme } from 'shared/ui/AppNavLink/AppNavLink';
import { RoutePath } from 'shared/config/routeConfig/routeConfig';

type NavProps = {
	className?: string;
	place?: 'header' | 'footer' | 'sidebar';
	icons?: boolean;
	collapsed?: boolean;
};

const Nav = ({ className, place, icons, collapsed = false }: NavProps) => {
	const { t } = useTranslation();
	const mods = {
		[styles.navHeader]: place === 'header',
		[styles.navFooter]: place === 'footer',
		[styles.navSidebar]: place === 'sidebar',
	};

	return (
		<nav className={classNames(styles.nav, mods, [className])}>
			<ul className={styles.nav__list}>
				<li>
					<AppNavLink to={RoutePath.main} theme={AppNavLinkTheme.SECONDARY}>
						{icons && <span className={classNames(styles.nav__icon, { [styles.large]: collapsed }, [])}><PageMainIcon/></span>}
						<span className={classNames(styles.nav__text, { [styles.hide]: collapsed }, [])}>{t('main')}</span>
					</AppNavLink>
				</li>
				<li>
					<AppNavLink to={RoutePath.about} theme={AppNavLinkTheme.SECONDARY}>
						{icons && <span className={classNames(styles.nav__icon, { [styles.large]: collapsed }, [])}><PageAboutIcon/></span>}
						<span className={classNames(styles.nav__text, { [styles.hide]: collapsed }, [])}>{t('about')}</span>
					</AppNavLink>
				</li>
			</ul>
		</nav>
	);
};

export default Nav;
