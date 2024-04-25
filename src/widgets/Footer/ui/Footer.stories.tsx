import type { Meta, StoryObj } from '@storybook/react';
import Footer from './Footer';
import ThemeDecorator from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';

const meta = {
	title: 'widgets/Footer',
	component: Footer,
	tags: ['autodocs'],
} satisfies Meta<typeof Footer>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Dark: Story = {
	decorators: [ThemeDecorator(Theme.DARK)],
};


