import { memo } from 'react';
import styles from './Footer.module.scss';
import { Link } from 'react-router-dom';
import { classNames } from 'shared/lib/classNames/classNames';
import Container from 'shared/ui/Container/Container';
import { Nav } from 'features/Nav';
import { ThemeSwitcher } from 'features/ThemeSwitcher';
import Logo from 'shared/assets/icons/logo.svg';

type FooterProps = {
	className?: string;
};

const Footer = memo(({ className }: FooterProps) => {
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
});

export default Footer;
