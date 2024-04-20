import { useState } from 'react';
import styles from './Sidebar.module.scss';
import { classNames } from 'shared/lib/classNames/classNames';
import Button, { ThemeButton } from 'shared/ui/Button/Button';
import ThemeSwitcher from 'shared/ui/ThemeSwitcher/ThemeSwitcher';
import LangSwitcher from 'shared/ui/LangSwitcher/LangSwitcher';

interface SidebarProps {
    className?: string;
}

const Sidebar = ({ className }: SidebarProps) => {
    const [collapsed, setCollapsed] = useState(false);

    const onToggle = () => setCollapsed(prev => !prev);
    
    return (
        <aside className={classNames(styles.sidebar, {[styles.collapsed]: collapsed}, [className])}>
            <Button
                theme={ThemeButton.DEFAULT}
                onClick={onToggle}
                className='m-centred'
            >
                Toggle
            </Button>
            <ul className={styles.sidebar__switchers}>
                <li className={styles.sidebar__switchersItem}>
                    <ThemeSwitcher/>
                </li>
                <li className={styles.sidebar__switchersItem}>
                    <LangSwitcher/>
                </li>
            </ul>
        </aside>
    );
};

export default Sidebar;