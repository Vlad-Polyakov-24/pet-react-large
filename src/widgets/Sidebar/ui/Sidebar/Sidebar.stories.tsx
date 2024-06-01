import type { Meta, StoryObj } from '@storybook/react';
import Sidebar from './Sidebar';
import ThemeDecorator from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import StoreDecorator from 'shared/config/storybook/StoreDecorator/StoreDecorator';

const meta = {
	title: 'widgets/Sidebar',
	component: Sidebar,
	tags: ['autodocs'],
} satisfies Meta<typeof Sidebar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
	decorators: [
		StoreDecorator({
			user: { authData: { id: '112', username: 'username' } },
		}),
	],
};

export const Dark: Story = {
	decorators: [
		ThemeDecorator(Theme.DARK),
		StoreDecorator({
			user: { authData: { id: '112', username: 'username' } },
		}),
	],
};

export const NoAuth: Story = {
	decorators: [
		StoreDecorator({
			user: {},
		}),
	],
};

export const NoAuthDark: Story = {
	decorators: [
		ThemeDecorator(Theme.DARK),
		StoreDecorator({
			user: {},
		}),
	],
};