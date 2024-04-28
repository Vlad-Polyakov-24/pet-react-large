import type { Meta, StoryObj } from '@storybook/react';
import Button, { ButtonSize, ButtonTheme } from './Button';
import ThemeDecorator from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';

const meta = {
	title: 'shared/Button',
	component: Button,
	tags: ['autodocs'],
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const SizeS: Story = {
	args: {
		children: 'Button',
		size: ButtonSize.S,
	},
};

export const SizeM: Story = {
	args: {
		children: 'Button',
		size: ButtonSize.M,
	},
};

export const SizeL: Story = {
	args: {
		children: 'Button',
		size: ButtonSize.L,
	},
};

export const SizeXL: Story = {
	args: {
		children: 'Button',
		size: ButtonSize.XL,
	},
};

export const Clear: Story = {
	args: {
		children: 'Button',
		theme: ButtonTheme.CLEAR,
	},
};

export const Outline: Story = {
	args: {
		children: 'Button',
		theme: ButtonTheme.OUTLINE,
	},
};

export const OutlineDark: Story = {
	args: {
		children: 'Button',
		theme: ButtonTheme.OUTLINE,
	},
	decorators: [ThemeDecorator(Theme.DARK)],
};

export const ThemeInverted: Story = {
	args: {
		children: 'Button',
		theme: ButtonTheme.THEME_INVERTED,
	},
};

export const ThemeInvertedDark: Story = {
	args: {
		children: 'Button',
		theme: ButtonTheme.THEME_INVERTED,
	},
	decorators: [ThemeDecorator(Theme.DARK)],
};

export const Background: Story = {
	args: {
		children: 'Button',
		theme: ButtonTheme.BACKGROUND,
	},
};

export const BackgroundInverted: Story = {
	args: {
		children: 'Button',
		theme: ButtonTheme.BACKGROUND_INVERTED,
	},
};

export const SquareS: Story = {
	args: {
		children: '>',
		theme: ButtonTheme.BACKGROUND_INVERTED,
		square: true,
		size: ButtonSize.S,
	},
};

export const SquareM: Story = {
	args: {
		children: '>',
		theme: ButtonTheme.BACKGROUND_INVERTED,
		square: true,
		size: ButtonSize.M,
	},
};

export const SquareL: Story = {
	args: {
		children: '>',
		theme: ButtonTheme.BACKGROUND_INVERTED,
		square: true,
		size: ButtonSize.L,
	},
};

export const SquareXL: Story = {
	args: {
		children: '>',
		theme: ButtonTheme.BACKGROUND_INVERTED,
		square: true,
		size: ButtonSize.XL,
	},
};

