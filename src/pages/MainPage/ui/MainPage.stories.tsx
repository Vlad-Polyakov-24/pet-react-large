import type { Meta, StoryObj } from '@storybook/react';
import MainPage from './MainPage';
import ThemeDecorator from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import StoreDecorator from 'shared/config/storybook/StoreDecorator/StoreDecorator';

const meta = {
	title: 'pages/MainPage',
	component: MainPage,
	tags: ['autodocs'],
} satisfies Meta<typeof MainPage>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
	decorators: [
		StoreDecorator({
			counter: { value: 0 },
		}),
	],
};

export const Dark: Story = {
	decorators: [
		ThemeDecorator(Theme.DARK),
		StoreDecorator({
			counter: { value: 0 },
		}),
	],
};