import styles from './Footer.module.scss';
import { Link } from 'react-router-dom';
import { classNames } from 'shared/lib/classNames/classNames';
import { Nav } from 'features/Nav';
import Container from 'shared/ui/Container/Container';
import ThemeSwitcher from 'shared/ui/ThemeSwitcher/ThemeSwitcher';
import Logo from 'shared/assets/icons/logo.svg';

interface FooterProps {
    className?: string;
}

const Footer = ({ className }: FooterProps) => {
    return (
        <footer className={classNames(styles.footer, {}, [className])}>
            <Container>
                <div className={styles.footer__inner}>
                    <strong className={styles.footer__logo}>
                        <Link to='/' className={styles.footer__logoLink}>
                            <Logo/>
                        </Link>
                    </strong>
                    <Nav place='footer'/>
                    <ThemeSwitcher />
                </div>
            </Container>
        </footer>
    );
};

export default Footer;
