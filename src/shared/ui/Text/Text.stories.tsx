import type { Meta, StoryObj } from '@storybook/react';
import Text, { TextTheme } from './Text';
import ThemeDecorator from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';

const meta = {
	title: 'shared/Text',
	component: Text,
	tags: ['autodocs'],
} satisfies Meta<typeof Text>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
	args: {
		title: 'Title Title Title',
		description: 'desc desc desc',
	},
};

export const Error: Story = {
	args: {
		title: 'Title Title Title',
		description: 'desc desc desc',
		theme: TextTheme.ERROR,
	},
};

export const OnlyTitle: Story = {
	args: {
		title: 'Title Title Title',
	},
};

export const OnlyDescription: Story = {
	args: {
		description: 'desc desc desc',
	},
};

export const DefaultDark: Story = {
	args: {
		title: 'Title Title Title',
		description: 'desc desc desc',
	},
	decorators: [ThemeDecorator(Theme.DARK)],
};

export const OnlyTitleDark: Story = {
	args: {
		title: 'Title Title Title',
	},
	decorators: [ThemeDecorator(Theme.DARK)],
};

export const OnlyDescriptionDark: Story = {
	args: {
		description: 'desc desc desc',
	},
	decorators: [ThemeDecorator(Theme.DARK)],
};