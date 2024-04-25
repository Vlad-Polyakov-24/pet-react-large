import type { Meta, StoryObj } from '@storybook/react';
import AppNavLink, { AppNavLinkTheme } from './AppNavLink';

const meta = {
	title: 'shared/AppNavLink',
	component: AppNavLink,
	tags: ['autodocs'],
	args: {
		to: '/',
	},
} satisfies Meta<typeof AppNavLink>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
	args: {
		theme: AppNavLinkTheme.PRIMARY,
		children: 'Some text',
	},
};

export const Secondary: Story = {
	args: {
		theme: AppNavLinkTheme.SECONDARY,
		children: 'Some text',
	},
};
