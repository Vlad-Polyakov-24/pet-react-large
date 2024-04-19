import { useState } from 'react';
import styles from './Sidebar.module.scss';
import { classNames } from 'shared/lib/classNames/classNames';
import Button, { ThemeButton } from 'shared/UI/Button/Button';
import ThemeSwitcher from 'shared/UI/ThemeSwitcher/ThemeSwitcher';

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
            </ul>
        </aside>
    );
};

export default Sidebar;
