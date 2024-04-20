import styles from './LangSwitcher.module.scss';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import Button from 'shared/ui/Button/Button';

interface LangSwitcherProps {
    className?: string;
}

const LangSwitcher = ({ className }: LangSwitcherProps) => {
    const {i18n} = useTranslation();

    const toggleLang = async () => {
        await i18n.changeLanguage(i18n.language === 'ua' ? 'en' : 'ua');
    };

    return (
        <Button
            className={classNames(styles.langSwitcher, {}, [className])}
            onClick={toggleLang}
        >
            {i18n.language === 'ua' ? '🇬🇧' : '🇺🇦'}
        </Button>
    );
};

export default LangSwitcher;
