import styles from './ThemeSwitcher.module.scss';
import { classNames } from 'shared/lib/classNames/classNames';
import { useTheme } from 'app/providers/ThemeProvider';
import Button, { ThemeButton } from 'shared/ui/Button/Button';
import ThemeIcon from 'shared/assets/icons/theme-switcher.svg';

type ThemeSwitcherProps = {
	className?: string;
};

const ThemeSwitcher = ({ className }: ThemeSwitcherProps) => {
	const { theme, toggleTheme } = useTheme();

	return (
		<Button
			theme={ThemeButton.CLEAR}
			className={classNames(styles.themeSwitcher, {}, [className, styles[theme]])}
			onClick={toggleTheme}
		>
			<ThemeIcon />
		</Button>
	);
};

export default ThemeSwitcher;
