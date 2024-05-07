import type { Meta, StoryObj } from '@storybook/react';
import LoginForm from './LoginForm';
import ThemeDecorator from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import StoreDecorator from 'shared/config/storybook/StoreDecorator/StoreDecorator';

const meta = {
	title: 'features/LoginForm',
	component: LoginForm,
	tags: ['autodocs'],
} satisfies Meta<typeof LoginForm>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
	decorators: [
		StoreDecorator({
			loginForm: { username: 'admin', password: '123', isLoading: false },
		}),
	],
};

export const Dark: Story = {
	decorators: [
		ThemeDecorator(Theme.DARK),
		StoreDecorator({
			loginForm: { username: 'admin', password: '123', isLoading: false },
		}),
	],
};

export const Error: Story = {
	decorators: [
		StoreDecorator({
			loginForm: { username: 'admin', password: '123', isLoading: false, error: 'Error!' },
		}),
	],
};

export const Loading: Story = {
	decorators: [
		StoreDecorator({
			loginForm: { username: 'admin', password: '123', isLoading: true },
		}),
	],
};
