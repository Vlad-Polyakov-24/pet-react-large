import styles from './Nav.module.scss';
import { classNames } from 'shared/lib/classNames/classNames';
import AppNavLink, { AppNavLinkTheme } from 'shared/UI/AppNavLink/AppNavLink';

interface NavProps {
    className?: string;
    place?: 'header' | 'footer';
}

const Nav = ({ className, place }: NavProps) => {
    return (
        <nav className={classNames(styles.nav, {[styles.navHeader]: place === 'header', [styles.navFooter]: place === 'footer'}, [className])}>
            <ul className={styles.nav__list}>
                <li>
                    <AppNavLink to='/' theme={AppNavLinkTheme.SECONDARY}>Main</AppNavLink>
                </li>
                <li>
                    <AppNavLink to='/about' theme={AppNavLinkTheme.SECONDARY}>About</AppNavLink>
                </li>
            </ul>
        </nav>
    );
};

export default Nav;
