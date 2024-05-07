import { type Decorator } from '@storybook/react';
import { type Theme, ThemeProvider } from 'app/providers/ThemeProvider';

const ThemeDecorator = (theme: Theme): Decorator => (Story) => (
	<ThemeProvider initialTheme={theme}>
		<div className={`storybook ${theme}`}>
			<Story/>
		</div>
	</ThemeProvider>
);

export default ThemeDecorator;