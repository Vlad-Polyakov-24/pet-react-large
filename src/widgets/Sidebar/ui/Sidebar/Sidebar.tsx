import { useState } from 'react';
import styles from './Sidebar.module.scss';
import { classNames } from 'shared/lib/classNames/classNames';
import Button, { ThemeButton } from 'shared/ui/Button/Button';
import { ThemeSwitcher } from 'features/ThemeSwitcher';
import { LangSwitcher } from 'features/LangSwitcher';

type SidebarProps = {
	className?: string;
};

const Sidebar = ({ className }: SidebarProps) => {
	const [collapsed, setCollapsed] = useState(false);

	const onToggle = () => {
		setCollapsed(prev => !prev); 
	};
    
	return (
		<aside data-testid="sidebar"
			   className={classNames(styles.sidebar, { [styles.collapsed]: collapsed }, [className])}>
			<Button
				data-testid="sidebar-toggle"
				theme={ThemeButton.OUTLINE}
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
