import type { Meta, StoryObj } from '@storybook/react';
import Loader from './Loader';
import ThemeDecorator from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';

const meta = {
	title: 'shared/Loader',
	component: Loader,
	tags: ['autodocs'],
} satisfies Meta<typeof Loader>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Dark: Story = {
	decorators: [ThemeDecorator(Theme.DARK)],
};