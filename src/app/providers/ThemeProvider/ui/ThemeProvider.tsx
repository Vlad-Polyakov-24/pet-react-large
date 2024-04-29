import React, { type FC, type ReactElement, useMemo, useState } from 'react';
import { LOCAL_STORAGE_THEME_KEY, Theme, ThemeContext } from '../lib/ThemeContext';

const defaultTheme: Theme = localStorage.getItem(LOCAL_STORAGE_THEME_KEY) as Theme || Theme.LIGHT;

type ThemeProviderProps = {
	children: ReactElement;
	initialTheme?: Theme;
};

const ThemeProvider: FC<ThemeProviderProps> = (props) => {
	const { children, initialTheme } = props;
	const [theme, setTheme] = useState<Theme>(initialTheme || defaultTheme);

	const defaultProps = useMemo(() => ({
		theme: theme,
		setTheme: setTheme,
	}), [theme]);

	return (
		<ThemeContext.Provider value={defaultProps}>
			{children}
		</ThemeContext.Provider>
	);
};

export default ThemeProvider;
