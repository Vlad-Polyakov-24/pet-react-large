import type { Meta, StoryObj } from '@storybook/react';
import { Theme } from 'app/providers/ThemeProvider';
import ArticlesPage from './ArticlesPage';
import ThemeDecorator from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';

const meta = {
	title: 'pages/ArticlesPage',
	component: ArticlesPage,
	tags: ['autodocs'],
} satisfies Meta<typeof ArticlesPage>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Dark: Story = {
	decorators: [
		ThemeDecorator(Theme.DARK),
	],
};