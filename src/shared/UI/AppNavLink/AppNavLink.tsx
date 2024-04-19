import { FC } from 'react';
import styles from './AppNavLink.module.scss';
import { NavLink, NavLinkProps } from 'react-router-dom';
import { classNames } from 'shared/lib/classNames/classNames';

export enum AppNavLinkTheme {
    PRIMARY = 'primary',
    SECONDARY = 'secondary',
}

interface AppNavLinkProps extends NavLinkProps {
    className?: string;
    theme?: AppNavLinkTheme;
}

const AppNavLink: FC<AppNavLinkProps> = (props) => {
    const {
        to,
        className,
        children,
        theme = AppNavLinkTheme.PRIMARY,
        ...otherProps
    } = props;

    return (
        <NavLink
            to={to}
            className={({isActive}) => classNames(styles.navLink, {}, [className, isActive ? styles.active : '', styles[theme]])}
            {...otherProps}
        >
            {children}
        </NavLink>
    );
};

export default AppNavLink;
