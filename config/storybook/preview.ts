import 'app/styles/index.scss';
import type { Preview } from '@storybook/react';
import ThemeDecorator from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import RouterDecorator from "shared/config/storybook/RouterDecorator/RouterDecorator";
import { Theme } from 'app/providers/ThemeProvider';

const preview: Preview = {
	decorators: [ThemeDecorator(Theme.LIGHT), RouterDecorator],
	parameters: {
		layout: 'fullscreen',
		controls: {
			matchers: {
				color: /(background|color)$/i,
				date: /Date$/i,
			},
		},
		docs: {
			story: {
				height: '300px',
			},
		},
	},
};

export default preview;
