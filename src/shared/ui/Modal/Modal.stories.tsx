import type { Meta, StoryObj } from '@storybook/react';
import Modal from './Modal';
import ThemeDecorator from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';

const meta = {
	title: 'shared/Modal',
	component: Modal,
	tags: ['autodocs'],
} satisfies Meta<typeof Modal>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
	args: {
		children: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis, deleniti eaque enim et eveniet explicabo odio pariatur sed tenetur? Accusamus accusantium blanditiis dolorem facilis nam necessitatibus nostrum, officia omnis pariatur quibusdam quisquam quod, soluta tempore totam unde voluptate voluptatibus. Ab adipisci amet aut, non perspiciatis praesentium recusandae rem sequi tempora',
		isOpen: true,
	},
};

export const PrimaryDark: Story = {
	args: {
		children: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis, deleniti eaque enim et eveniet explicabo odio pariatur sed tenetur? Accusamus accusantium blanditiis dolorem facilis nam necessitatibus nostrum, officia omnis pariatur quibusdam quisquam quod, soluta tempore totam unde voluptate voluptatibus. Ab adipisci amet aut, non perspiciatis praesentium recusandae rem sequi tempora',
		isOpen: true,
	},
	decorators: [ThemeDecorator(Theme.DARK)],
};
