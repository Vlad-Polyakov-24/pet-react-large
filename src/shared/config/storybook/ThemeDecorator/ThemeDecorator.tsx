import { type Decorator } from '@storybook/react';
import { type Theme } from 'app/providers/ThemeProvider';

// eslint-disable-next-line react/display-name
const ThemeDecorator = (theme: Theme): Decorator => (Story) => (
	<div className={`storybook ${theme}`}>
		<Story/>
	</div>
);

export default ThemeDecorator;