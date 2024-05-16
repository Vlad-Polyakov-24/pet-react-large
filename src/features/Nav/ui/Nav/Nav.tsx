import { memo } from 'react';
import styles from './Nav.module.scss';
import { classNames } from 'shared/lib/classNames/classNames';
import { NavItemsList } from '../../model/NavItems';
import NavItem from '../NavItem/NavItem';

type NavProps = {
	className?: string;
	place?: 'header' | 'footer' | 'sidebar';
	icons?: boolean;
	collapsed?: boolean;
};

const Nav = memo(({ className, place, icons, collapsed = false }: NavProps) => {
	const mods = {
		[styles.navHeader]: place === 'header',
		[styles.navFooter]: place === 'footer',
		[styles.navSidebar]: place === 'sidebar',
	};

	return (
		<nav className={classNames(styles.nav, mods, [className])}>
			<ul className={styles.nav__list}>
				{NavItemsList.map((item) => <NavItem
					key={item.path}
					item={item}
					collapsed={collapsed}
					icon={icons}
				/>)}
			</ul>
		</nav>
	);
});

export default Nav;
