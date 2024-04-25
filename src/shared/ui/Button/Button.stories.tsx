import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import Button, { ThemeButton } from './Button';
import ThemeDecorator from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';

const meta = {
	title: 'shared/Button',
	component: Button,
	tags: ['autodocs'],
	args: { onClick: fn() },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Clear: Story = {
	args: {
		children: 'Button',
		theme: ThemeButton.CLEAR,
	},
};

export const Outline: Story = {
	args: {
		children: 'Button',
		theme: ThemeButton.OUTLINE,
	},
};

export const OutlineDark: Story = {
	args: {
		children: 'Button',
		theme: ThemeButton.OUTLINE,
	},
	decorators: [ThemeDecorator(Theme.DARK)],
};

export const Error: Story = {
	args: {
		children: 'Button',
		theme: ThemeButton.ERROR,
	},
};

export const ErrorDark: Story = {
	args: {
		children: 'Button',
		theme: ThemeButton.ERROR,
	},
	decorators: [ThemeDecorator(Theme.DARK)],
};