import type { Meta, StoryObj } from '@storybook/react';
import Nav from './Nav';
import ThemeDecorator from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';

const meta = {
	title: 'features/Nav',
	component: Nav,
	tags: ['autodocs'],
} satisfies Meta<typeof Nav>;

export default meta;
type Story = StoryObj<typeof meta>;

export const InHeaderDefault: Story = {
	args: {
		place: 'header',
	},
};

export const InHeaderDark: Story = {
	args: {
		place: 'header',
	},
	decorators: [ThemeDecorator(Theme.DARK)],
};

export const InFooterDefault: Story = {
	args: {
		place: 'footer',
	},
};

export const InFooterDark: Story = {
	args: {
		place: 'footer',
	},
	decorators: [ThemeDecorator(Theme.DARK)],
};