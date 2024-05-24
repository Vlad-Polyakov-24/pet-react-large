import type { Meta, StoryObj } from '@storybook/react';
import Avatar from './Avatar';
import AvatarImg from './avatar_stories.jpg';

const meta = {
	title: 'shared/Avatar',
	component: Avatar,
	tags: ['autodocs'],
} satisfies Meta<typeof Avatar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
	args: {
		src: AvatarImg,
	},
};

export const Small: Story = {
	args: {
		src: AvatarImg,
		size: 50,
	},
};

export const Large: Story = {
	args: {
		src: AvatarImg,
		size: 200,
	},
};
