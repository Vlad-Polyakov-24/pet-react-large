import styles from './ThemeSwitcher.module.scss';
import { classNames } from 'shared/lib/classNames/classNames';
import { useTheme } from 'app/providers/ThemeProvider';
import Button from 'shared/ui/Button/Button';
import ThemeIcon from 'shared/assets/icons/theme-switcher.svg';

interface ThemeSwitcherProps {
    className?: string;
}

const ThemeSwitcher = ({ className }: ThemeSwitcherProps) => {
    const { theme, toggleTheme } = useTheme();

    return (
        <Button
            className={classNames(styles.themeSwitcher, {}, [className, styles[theme]])}
            onClick={toggleTheme}
        >
            <ThemeIcon />
        </Button>
    );
};

export default ThemeSwitcher;
