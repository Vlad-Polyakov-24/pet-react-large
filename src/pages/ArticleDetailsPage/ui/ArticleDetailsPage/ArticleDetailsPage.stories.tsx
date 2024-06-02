import type { Meta, StoryObj } from '@storybook/react';
import { Theme } from 'app/providers/ThemeProvider';
import ArticleDetailsPage from './ArticleDetailsPage';
import ThemeDecorator from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';

const meta = {
	title: 'pages/ArticleDetailsPage',
	component: ArticleDetailsPage,
	tags: ['autodocs'],
} satisfies Meta<typeof ArticleDetailsPage>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Dark: Story = {
	decorators: [
		ThemeDecorator(Theme.DARK),
	],
};