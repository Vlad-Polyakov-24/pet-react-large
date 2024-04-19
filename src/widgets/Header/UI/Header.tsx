import React from 'react';
import styles from './Header.module.scss';
import { Link } from 'react-router-dom';
import { classNames } from 'shared/lib/classNames/classNames';
import Nav from 'shared/UI/Nav/Nav';
import ThemeSwitcher from 'shared/UI/ThemeSwitcher/ThemeSwitcher';
import Logo from 'shared/assets/icons/logo.svg';

interface HeaderProps {
    className?: string;
}

const Header = ({ className }: HeaderProps) => {
    return (
        <header className={classNames(styles.header, {}, [className])}>
            <div className={styles.header__container}>
                <strong className={styles.header__logo}>
                    <Link to='/' className={styles.header__logoLink}>
                        <Logo/>
                    </Link>
                </strong>
                <Nav/>
            </div>
        </header>
    );
};

export default Header;
